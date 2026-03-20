import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

type PatientsByAgeDatum = {
  age: string;
  count: number;
};

const PatientsBarChart = ({ data }: { data: PatientsByAgeDatum[] }) => {
  return (
    <BarChart width={400} height={300} data={data}>
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
