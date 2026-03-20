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

      {/* Toggle
      <div style={{ marginBottom: "16px" }}>
        <button onClick={() => setView("list")}>List</button>
        <button onClick={() => setView("grid")}>Grid</button>
      </div> */}

      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "16px",
        }}
      >
        <span>List</span>

        <div
          onClick={() => setView((prev) => (prev === "list" ? "grid" : "list"))}
          style={{
            width: "50px",
            height: "24px",
            background: view === "grid" ? "#4caf50" : "#ccc",
            borderRadius: "999px",
            position: "relative",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              background: "#fff",
              borderRadius: "50%",
              position: "absolute",
              top: "2px",
              left: view === "grid" ? "26px" : "2px",
              transition: "left 0.3s",
            }}
          />
        </div>

        <span>Grid</span>
      </div> */}

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
