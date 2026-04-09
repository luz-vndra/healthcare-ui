import { Stack } from "react-bootstrap";
import { type Patient } from "../data/patients";
import PatientCard from "./PatientCard";

type Props = {
  patients: Patient[];
  onSelect: (id: number) => void;
};

const PatientList = ({ patients, onSelect }: Props) => {
  return (
    <Stack gap={3}>
      {patients.map((p) => (
        <PatientCard key={p.id} patient={p} onClick={() => onSelect(p.id)} />
      ))}
    </Stack>
  );
};

export default PatientList;
