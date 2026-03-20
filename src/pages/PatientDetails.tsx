import { useParams } from "react-router-dom";
import { patients } from "../features/patients/data/patients";

const PatientDetails = () => {
  const { id } = useParams();

  const patient = patients.find((p) => p.id === Number(id));

  if (!patient) return <div>Patient not found</div>;

  return (
    <div>
      <h1>{patient.name}</h1>
      <p>Age: {patient.age}</p>
      <p>Condition: {patient.condition}</p>
    </div>
  );
};

export default PatientDetails;