import { type Patient } from "../data/patients";

type Props = {
  patient: Patient;
  onClick: () => void;
};

const PatientCard = ({ patient, onClick }: Props) => {
  return (
    <div
      onClick={onClick}
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      <h3>{patient.name}</h3>
      <p>
        {patient.age}, {patient.gender}
      </p>
      <p>{patient.condition}</p>
    </div>
  );
};

export default PatientCard;