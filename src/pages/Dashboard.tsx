import { useNavigate } from "react-router-dom";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { patients } from "../features/patients/data/patients";

const showNotification = async () => {
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    new Notification("New Patient Alert", {
      body: "A new patient has been added.",
    });
  }
};

const Dashboard = () => {
  const totalPatients = patients.length;
  const avgAge =
    Math.round(patients.reduce((acc, p) => acc + p.age, 0) / patients.length) ||
    0;

  const uniqueConditions = new Set(patients.map((p) => p.condition)).size;
  const recentPatients = patients.slice(0, 5);
  const navigate = useNavigate();

  return (
    <div>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0">Dashboard</h1>
        <Button onClick={showNotification}>Test Notification</Button>
      </div>

      <Row className="g-3 mb-4">
        <Col md={6} xl={3}>
          <StatCard title="Total Patients" value={totalPatients} />
        </Col>
        <Col md={6} xl={3}>
          <StatCard title="Avg Age" value={avgAge} />
        </Col>
        <Col md={6} xl={3}>
          <StatCard title="Conditions Tracked" value={uniqueConditions} />
        </Col>
        <Col md={6} xl={3}>
          <StatCard title="Critical Cases" value={3} />
        </Col>
      </Row>

      <Card>
        <Card.Header className="fw-semibold">Recent Patients</Card.Header>
        <ListGroup variant="flush">
          {recentPatients.map((p) => (
            <ListGroup.Item
              action
              key={p.id}
              onClick={() => navigate("/patients/" + p.id)}
            >
              <span className="fw-semibold">{p.name}</span> - {p.condition}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default Dashboard;

type CardProps = {
  title: string;
  value: number;
};

const StatCard = ({ title, value }: CardProps) => {
  return (
    <Card className="h-100">
      <Card.Body>
        <Card.Text className="text-muted mb-2">{title}</Card.Text>
        <Card.Title className="mb-0">{value}</Card.Title>
      </Card.Body>
    </Card>
  );
};
