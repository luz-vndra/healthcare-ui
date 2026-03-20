import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { patientsByAge } from "../data/analyticsData";

const PatientsBarChart = () => {
  return (
    <BarChart width={400} height={300} data={patientsByAge}>
      <XAxis dataKey="age" stroke="#fff" />
      <YAxis stroke="#fff" />
      <Tooltip
        contentStyle={{
          backgroundColor: "#222",
          border: "none",
          color: "#fff",
        }}
        labelStyle={{ color: "#fff" }}
      />
      <Bar dataKey="count" fill="#fff" />
    </BarChart>
  );
};

export default PatientsBarChart;
