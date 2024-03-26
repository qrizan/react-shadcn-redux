import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

import { IGamesBookmarked } from "@/dtos/dashboard.dto";

interface IOverviewProps {
  gamesBookmarked?: IGamesBookmarked[],
}

export const Overview: React.FC<IOverviewProps> = (props) => {
  const { gamesBookmarked } = props;
  
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={gamesBookmarked}>
        <XAxis
          dataKey="month"
          stroke="#888888"
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value.toLocaleString()}`}
        />
        <Bar dataKey="count" fill="hsl(var(--foreground))" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}