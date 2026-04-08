import { PieChart, Pie, Tooltip, Legend } from "recharts";

type GenderDistributionDatum = {
  name: "Male" | "Female" | "Other";
  value: number;
};

const COLORS = ["#60A5FA", "#4ADE80", "#F472B6"];

const GenderPieChart = ({ data }: { data: GenderDistributionDatum[] }) => {
  const pieData = data.map((entry, index) => ({
    ...entry,
    fill: COLORS[index],
  }));

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={pieData}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
      />

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
