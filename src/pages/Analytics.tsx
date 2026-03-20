import PatientsBarChart from "../features/analytics/components/PatientsBarChart";
import AppointmentsLineChart from "../features/analytics/components/AppointmentsLineChart";
import GenderPieChart from "../features/analytics/components/GenderPieChart";

const Analytics = () => {
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
          <PatientsBarChart />
        </ChartCard>

        <ChartCard title="Appointments Trend (Weekly)">
          <AppointmentsLineChart />
        </ChartCard>

        <ChartCard title="Gender Distribution">
          <GenderPieChart />
        </ChartCard>
      </div>
    </div>
  );
};

export default Analytics;

/* reusable wrapper */
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

      {/* Centering wrapper */}
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