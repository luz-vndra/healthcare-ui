import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

type GenderDistributionDatum = {
  name: "Male" | "Female" | "Other";
  value: number;
};

const COLORS = ["#0d6efd", "#20c997", "#ffc107"];

const GenderPieChart = ({ data }: { data: GenderDistributionDatum[] }) => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={110}
          label
        >
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GenderPieChart;
