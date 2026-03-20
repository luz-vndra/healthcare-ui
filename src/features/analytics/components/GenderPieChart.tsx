import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

type GenderDistributionDatum = {
  name: "Male" | "Female" | "Other";
  value: number;
};

const COLORS = ["#60A5FA", "#4ADE80", "#F472B6"];

const GenderPieChart = ({ data }: { data: GenderDistributionDatum[] }) => {
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
      >
        {data.map((_, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Tooltip
        contentStyle={{
          backgroundColor: "#222",
          border: "none",
          color: "#fff",
        }}
      />

      <Legend />
    </PieChart>
  );
};

export default GenderPieChart;
