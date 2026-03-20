import { patients } from "../features/patients/data/patients";

const showNotification = async () => {
  const permission = await Notification.requestPermission();

  if (permission === "granted") {
    new Notification("New Patient Alert 🚑", {
      body: "A new patient has been added.",
    });
  }
};

const Dashboard = () => {
  // simple derived stats
  const totalPatients = patients.length;
  const avgAge =
    Math.round(patients.reduce((acc, p) => acc + p.age, 0) / patients.length) ||
    0;

  const conditions = patients.map((p) => p.condition);
  const uniqueConditions = new Set(conditions).size;

  const recentPatients = patients.slice(0, 5);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <button
        onClick={showNotification}
        style={{
          marginBottom: "16px",
          padding: "8px 12px",
          cursor: "pointer",
        }}
      >
        Test Notification
      </button>

      {/* KPI Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "16px",
          marginBottom: "24px",
        }}
      >
        <Card title="Total Patients" value={totalPatients} />
        <Card title="Avg Age" value={avgAge} />
        <Card title="Conditions Tracked" value={uniqueConditions} />
        <Card title="Critical Cases" value={3} /> {/* dummy */}
      </div>

      {/* Recent Patients */}
      <div>
        <h2>Recent Patients</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {recentPatients.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "6px",
              }}
            >
              <strong>{p.name}</strong> — {p.condition}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

/* ------------------- */
/* Small reusable card */
/* ------------------- */

type CardProps = {
  title: string;
  value: number;
};

const Card = ({ title, value }: CardProps) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "16px",
        background: "#fafafa",
      }}
    >
      <p style={{ margin: 0, color: "#666" }}>{title}</p>
      <h2 style={{ margin: "8px 0 0 0", color: "black" }}>{value}</h2>
    </div>
  );
};
