import { Alert, Card, Spinner, Stack } from "react-bootstrap";
import PatientsBarChart from "../features/analytics/components/PatientsBarChart";
import AppointmentsLineChart from "../features/analytics/components/AppointmentsLineChart";
import GenderPieChart from "../features/analytics/components/GenderPieChart";
import { usePatients } from "../features/patients/state/PatientsContext";

const Analytics = () => {
  const { isLoading, error, patientsByAge, appointmentsPerDay, genderDistribution } =
    usePatients();

  if (isLoading) {
    return (
      <div className="d-flex align-items-center gap-2">
        <Spinner size="sm" />
        <span>Loading analytics...</span>
      </div>
    );
  }

  if (error) return <Alert variant="danger">{error}</Alert>;

  return (
    <div>
      <h1 className="h3 mb-4">Analytics</h1>

      <Stack gap={3}>
        <ChartCard title="Patients by Age Group">
          <PatientsBarChart data={patientsByAge} />
        </ChartCard>

        <ChartCard title="Appointments Trend (Weekly)">
          <AppointmentsLineChart data={appointmentsPerDay} />
        </ChartCard>

        <ChartCard title="Gender Distribution">
          <GenderPieChart data={genderDistribution} />
        </ChartCard>
      </Stack>
    </div>
  );
};

export default Analytics;

type ChartCardProps = {
  title: string;
  children: React.ReactNode;
};

const ChartCard = ({ title, children }: ChartCardProps) => {
  return (
    <Card>
      <Card.Header className="fw-semibold">{title}</Card.Header>
      <Card.Body className="chart-wrapper">{children}</Card.Body>
    </Card>
  );
};
