import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type AppointmentsPerDayDatum = {
  day: "Mon" | "Tue" | "Wed" | "Thu" | "Fri";
  count: number;
};

const AppointmentsLineChart = ({ data }: { data: AppointmentsPerDayDatum[] }) => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke="#0d6efd" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default AppointmentsLineChart;
