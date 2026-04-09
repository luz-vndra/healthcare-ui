import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Col,
  Form,
  InputGroup,
  Row,
  Spinner,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";

import PatientList from "../features/patients/components/PatientList";
import PatientGrid from "../features/patients/components/PatientGrid";
import { usePatients } from "../features/patients/state/PatientsContext";

const Patients = () => {
  const [view, setView] = useState<"list" | "grid">("list");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<
    "name-asc" | "name-desc" | "age-asc" | "age-desc"
  >("name-asc");
  const navigate = useNavigate();
  const { patients, isLoading, error } = usePatients();

  const handleSelect = (id: number) => {
    navigate("/patients/" + id);
  };

  const showError = Boolean(error);
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const visiblePatients = useMemo(() => {
    const filtered = patients.filter((patient) => {
      if (normalizedQuery === "") return true;

      return (
        patient.name.toLowerCase().includes(normalizedQuery) ||
        patient.condition.toLowerCase().includes(normalizedQuery)
      );
    });

    const sorted = [...filtered];

    sorted.sort((a, b) => {
      switch (sortBy) {
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "age-asc":
          return a.age - b.age;
        case "age-desc":
          return b.age - a.age;
        case "name-asc":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return sorted;
  }, [patients, normalizedQuery, sortBy]);

  return (
    <div>
      <h1 className="h3 mb-4">Patients</h1>

      <Row className="g-3 align-items-center mb-4">
        <Col xs={12} lg={6}>
          <InputGroup>
            <InputGroup.Text>Search</InputGroup.Text>
            <Form.Control
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Name or condition"
              aria-label="Search patients"
            />
          </InputGroup>
        </Col>

        <Col xs={12} sm={6} lg={3}>
          <Form.Select
            value={sortBy}
            onChange={(event) =>
              setSortBy(
                event.target.value as
                  | "name-asc"
                  | "name-desc"
                  | "age-asc"
                  | "age-desc",
              )
            }
            aria-label="Sort patients"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="age-asc">Age (Low to High)</option>
            <option value="age-desc">Age (High to Low)</option>
          </Form.Select>
        </Col>

        <Col xs={12} sm={6} lg={3}>
          <ToggleButtonGroup
            type="radio"
            name="patient-view"
            value={view}
            onChange={(val) => setView(val)}
            className="w-100"
          >
            <ToggleButton id="view-list" value="list" variant="outline-primary">
              List
            </ToggleButton>
            <ToggleButton id="view-grid" value="grid" variant="outline-primary">
              Grid
            </ToggleButton>
          </ToggleButtonGroup>
        </Col>
      </Row>

      {isLoading ? (
        <div className="d-flex align-items-center gap-2">
          <Spinner size="sm" />
          <span>Loading patients...</span>
        </div>
      ) : null}

      {showError ? <Alert variant="danger">{error}</Alert> : null}

      {isLoading === false && showError === false ? (
        visiblePatients.length > 0 ? (
          view === "list" ? (
            <PatientList patients={visiblePatients} onSelect={handleSelect} />
          ) : (
            <PatientGrid patients={visiblePatients} onSelect={handleSelect} />
          )
        ) : (
          <Alert variant="secondary">No patients match your search.</Alert>
        )
      ) : null}
    </div>
  );
};

export default Patients;
