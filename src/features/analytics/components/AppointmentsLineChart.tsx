import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type AppointmentsPerDayDatum = {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
  count: number;
};

const AppointmentsLineChart = ({ data }: { data: AppointmentsPerDayDatum[] }) => {
  return (
    <LineChart width={400} height={300} data={data}>
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
