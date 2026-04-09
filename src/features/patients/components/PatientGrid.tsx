import { Col, Row } from "react-bootstrap";
import { type Patient } from "../data/patients";
import PatientCard from "./PatientCard";

type Props = {
  patients: Patient[];
  onSelect: (id: number) => void;
};

const PatientGrid = ({ patients, onSelect }: Props) => {
  return (
    <Row className="g-3">
      {patients.map((p) => (
        <Col key={p.id} xs={12} sm={6} lg={4} xl={3}>
          <PatientCard patient={p} onClick={() => onSelect(p.id)} />
        </Col>
      ))}
    </Row>
  );
};

export default PatientGrid;
