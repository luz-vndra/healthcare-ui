import { useParams } from "react-router-dom";
import { usePatients } from "../features/patients/state/PatientsContext";

const PatientDetails = () => {
  const { id } = useParams();
  const { patients, isLoading, error } = usePatients();

  if (isLoading) return <div>Loading patient details...</div>;
  if (error) return <div>{error}</div>;

  const patient = patients.find((p) => p.id === Number(id));

  if (patient == null) return <div>Patient not found</div>;

  return (
    <div>
      <h1>{patient.name}</h1>
      <p>Age: {patient.age}</p>
      <p>Condition: {patient.condition}</p>
      <p>Gender: {patient.gender}</p>
      <p>Appointment Day: {patient.appointmentDay}</p>
    </div>
  );
};

export default PatientDetails;
