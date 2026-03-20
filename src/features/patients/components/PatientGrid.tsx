import { type Patient } from "../data/patients";
import PatientCard from "./PatientCard";

type Props = {
  patients: Patient[];
  onSelect: (id: number) => void;
};

const PatientGrid = ({ patients, onSelect }: Props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "16px",
      }}
    >
      {patients.map((p) => (
        <PatientCard
          key={p.id}
          patient={p}
          onClick={() => onSelect(p.id)}
        />
      ))}
    </div>
  );
};

export default PatientGrid;