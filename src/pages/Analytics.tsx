import PatientsBarChart from "../features/analytics/components/PatientsBarChart";
import AppointmentsLineChart from "../features/analytics/components/AppointmentsLineChart";
import GenderPieChart from "../features/analytics/components/GenderPieChart";
import { usePatients } from "../features/patients/state/PatientsContext";

const Analytics = () => {
  const { isLoading, error, patientsByAge, appointmentsPerDay, genderDistribution } =
    usePatients();

  if (isLoading) return <div style={{ padding: "20px" }}>Loading analytics...</div>;
  if (error) return <div style={{ padding: "20px" }}>{error}</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#fff" }}>Analytics</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <ChartCard title="Patients by Age Group">
          <PatientsBarChart data={patientsByAge} />
        </ChartCard>

        <ChartCard title="Appointments Trend (Weekly)">
          <AppointmentsLineChart data={appointmentsPerDay} />
        </ChartCard>

        <ChartCard title="Gender Distribution">
          <GenderPieChart data={genderDistribution} />
        </ChartCard>
      </div>
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
    <div
      style={{
        background: "#111",
        padding: "16px",
        borderRadius: "10px",
      }}
    >
      <h3
        style={{
          color: "#fff",
          marginBottom: "12px",
        }}
      >
        {title}
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
    </div>
  );
};
