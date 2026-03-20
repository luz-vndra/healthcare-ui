import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { genderDistribution } from "../data/analyticsData";

const COLORS = ["#60A5FA", "#4ADE80", "#F472B6"];

const GenderPieChart = () => {
  return (
    <PieChart width={400} height={300}>
      <Pie
        data={genderDistribution}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        label
      >
        {genderDistribution.map((_, index) => (
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