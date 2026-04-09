import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import PatientList from "../features/patients/components/PatientList";
import PatientGrid from "../features/patients/components/PatientGrid";
import Toggle from "../components/Toggle";
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
      <h1>Patients</h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          marginBottom: "20px",
        }}
      >
        <span style={{ opacity: view === "list" ? 1 : 0.5 }}>List</span>

        <Toggle
          value={view === "grid"}
          onChange={(val) => setView(val ? "grid" : "list")}
        />

        <span style={{ opacity: view === "grid" ? 1 : 0.5 }}>Grid</span>
      </div>

      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "20px",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Search by name, or condition"
          aria-label="Search patients"
          style={{
            padding: "10px 12px",
            borderRadius: "8px",
            border: "1px solid var(--border)",
            minWidth: "280px",
            maxWidth: "420px",
            width: "100%",
          }}
        />

        <select
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
          style={{
            padding: "10px 12px",
            borderRadius: "8px",
            border: "1px solid var(--border)",
          }}
        >
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="age-asc">Age (Low to High)</option>
          <option value="age-desc">Age (High to Low)</option>
        </select>
      </div>

      {isLoading ? <p>Loading patients...</p> : null}
      {showError ? <p>{error}</p> : null}

      {isLoading === false && showError === false ? (
        visiblePatients.length > 0 ? (
          view === "list" ? (
            <PatientList patients={visiblePatients} onSelect={handleSelect} />
          ) : (
            <PatientGrid patients={visiblePatients} onSelect={handleSelect} />
          )
        ) : (
          <p>No patients match your search.</p>
        )
      ) : null}
    </div>
  );
};

export default Patients;
