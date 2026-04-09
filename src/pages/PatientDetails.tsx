import { useParams } from "react-router-dom";
import { Alert, Card, ListGroup, Spinner } from "react-bootstrap";
import { usePatients } from "../features/patients/state/PatientsContext";

const PatientDetails = () => {
  const { id } = useParams();
  const { patients, isLoading, error } = usePatients();

  if (isLoading) {
    return (
      <div className="d-flex align-items-center gap-2">
        <Spinner size="sm" />
        <span>Loading patient details...</span>
      </div>
    );
  }

  if (error) return <Alert variant="danger">{error}</Alert>;

  const patient = patients.find((p) => p.id === Number(id));

  if (patient == null) return <Alert variant="warning">Patient not found.</Alert>;

  return (
    <Card>
      <Card.Header className="fw-semibold">{patient.name}</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>Age: {patient.age}</ListGroup.Item>
        <ListGroup.Item>Condition: {patient.condition}</ListGroup.Item>
        <ListGroup.Item>Gender: {patient.gender}</ListGroup.Item>
        <ListGroup.Item>Appointment Day: {patient.appointmentDay}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default PatientDetails;
