import PatientsBarChart from "../features/analytics/components/PatientsBarChart";

const Analytics = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Analytics</h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          background: "#222",
          padding: "16px",
          borderRadius: "8px",
        }}
      >
        <PatientsBarChart />
        <p>Patients Bar chart</p>
      </div>
    </div>
  );
};

export default Analytics;
