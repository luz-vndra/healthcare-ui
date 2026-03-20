import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { appointmentsPerDay } from "../data/analyticsData";

const AppointmentsLineChart = () => {
  return (
    <LineChart width={400} height={300} data={appointmentsPerDay}>
      <CartesianGrid stroke="#444" strokeDasharray="3 3" />

      <XAxis dataKey="day" stroke="#fff" />
      <YAxis stroke="#fff" />

      <Tooltip
        contentStyle={{
          backgroundColor: "#222",
          border: "none",
          color: "#fff",
        }}
        labelStyle={{ color: "#fff" }}
      />

      <Line
        type="monotone"
        dataKey="count"
        stroke="#60A5FA"
        strokeWidth={2}
      />
    </LineChart>
  );
};

export default AppointmentsLineChart;