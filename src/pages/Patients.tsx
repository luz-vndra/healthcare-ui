import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PatientList from "../features/patients/components/PatientList";
import PatientGrid from "../features/patients/components/PatientGrid";
import Toggle from "../components/Toggle";
import { usePatients } from "../features/patients/state/PatientsContext";

const Patients = () => {
  const [view, setView] = useState<"list" | "grid">("list");
  const navigate = useNavigate();
  const { patients, isLoading, error } = usePatients();

  const handleSelect = (id: number) => {
    navigate("/patients/" + id);
  };

  const showError = Boolean(error);

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

      {isLoading ? <p>Loading patients...</p> : null}
      {showError ? <p>{error}</p> : null}

      {isLoading === false && showError === false
        ? view === "list"
          ? <PatientList patients={patients} onSelect={handleSelect} />
          : <PatientGrid patients={patients} onSelect={handleSelect} />
        : null}
    </div>
  );
};

export default Patients;
