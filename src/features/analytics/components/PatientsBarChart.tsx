import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

type PatientsByAgeDatum = {
  age: string;
  count: number;
};

const PatientsBarChart = ({ data }: { data: PatientsByAgeDatum[] }) => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={data}>
        <XAxis dataKey="age" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#0d6efd" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default PatientsBarChart;
