import { Card } from "react-bootstrap";
import { type Patient } from "../data/patients";

type Props = {
  patient: Patient;
  onClick: () => void;
};

const PatientCard = ({ patient, onClick }: Props) => {
  return (
    <Card onClick={onClick} className="cursor-pointer h-100 patient-card" role="button">
      <Card.Body>
        <Card.Title className="mb-1">{patient.name}</Card.Title>
        <Card.Text className="mb-1 text-muted">
          {patient.age}, {patient.gender}
        </Card.Text>
        <Card.Text className="mb-0">{patient.condition}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PatientCard;
