import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { patients } from "../features/patients/data/patients";
import PatientList from "../features/patients/components/PatientList";
import PatientGrid from "../features/patients/components/PatientGrid";
import Toggle from "../components/Toggle";

const Patients = () => {
  const [view, setView] = useState<"list" | "grid">("list");
  const navigate = useNavigate();

  const handleSelect = (id: number) => {
    navigate(`/patients/${id}`);
  };

  return (
    <div>
      <h1>Patients</h1>

      {/* Toggle */}
      <div
        style={{
          display: "flex",
          justifyContent: "center", // centers horizontally
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

      {/* View */}
      {view === "list" ? (
        <PatientList patients={patients} onSelect={handleSelect} />
      ) : (
        <PatientGrid patients={patients} onSelect={handleSelect} />
      )}
    </div>
  );
};

export default Patients;
