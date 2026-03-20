import { type Patient } from "../data/patients";
import PatientCard from "./PatientCard";

type Props = {
  patients: Patient[];
  onSelect: (id: number) => void;
};

const PatientList = ({ patients, onSelect }: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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

export default PatientList;