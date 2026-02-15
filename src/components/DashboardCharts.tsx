import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import type { Candidate } from "@/data/candidates";

interface DashboardChartsProps {
  candidates: Candidate[];
}

const COLORS = [
  "hsl(220, 70%, 45%)",
  "hsl(175, 50%, 42%)",
  "hsl(38, 90%, 55%)",
  "hsl(340, 65%, 55%)",
  "hsl(270, 55%, 55%)",
  "hsl(152, 60%, 42%)",
];

const DashboardCharts = ({ candidates }: DashboardChartsProps) => {
  // Skills distribution
  const skillCount: Record<string, number> = {};
  candidates.forEach((c) => c.skills.forEach((s) => {
    skillCount[s] = (skillCount[s] || 0) + 1;
  }));
  const skillData = Object.entries(skillCount)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  // Location distribution
  const locCount: Record<string, number> = {};
  candidates.forEach((c) => {
    locCount[c.location] = (locCount[c.location] || 0) + 1;
  });
  const locData = Object.entries(locCount).map(([name, value]) => ({ name, value }));

  // Experience distribution
  const expBuckets = [
    { name: "0-2 yrs", count: 0 },
    { name: "3-4 yrs", count: 0 },
    { name: "5+ yrs", count: 0 },
  ];
  candidates.forEach((c) => {
    if (c.experience <= 2) expBuckets[0].count++;
    else if (c.experience <= 4) expBuckets[1].count++;
    else expBuckets[2].count++;
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      {/* Skills Bar Chart */}
      <div className="bg-card rounded-lg shadow-card p-5">
        <h4 className="font-heading font-semibold text-card-foreground mb-4">Skills Distribution</h4>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={skillData} layout="vertical" margin={{ left: 10 }}>
            <XAxis type="number" tick={{ fontSize: 12, fill: "hsl(220, 10%, 46%)" }} />
            <YAxis dataKey="name" type="category" tick={{ fontSize: 11, fill: "hsl(220, 10%, 46%)" }} width={80} />
            <Tooltip
              contentStyle={{
                background: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(220, 15%, 88%)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Bar dataKey="count" fill="hsl(220, 70%, 45%)" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Location Pie Chart */}
      <div className="bg-card rounded-lg shadow-card p-5">
        <h4 className="font-heading font-semibold text-card-foreground mb-4">Candidates by Location</h4>
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            <Pie
              data={locData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={75}
              innerRadius={40}
              paddingAngle={3}
              strokeWidth={0}
            >
              {locData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(220, 15%, 88%)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Legend wrapperStyle={{ fontSize: "11px" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Experience Bar Chart */}
      <div className="bg-card rounded-lg shadow-card p-5">
        <h4 className="font-heading font-semibold text-card-foreground mb-4">Experience Levels</h4>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={expBuckets}>
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: "hsl(220, 10%, 46%)" }} />
            <YAxis tick={{ fontSize: 12, fill: "hsl(220, 10%, 46%)" }} />
            <Tooltip
              contentStyle={{
                background: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(220, 15%, 88%)",
                borderRadius: "8px",
                fontSize: "12px",
              }}
            />
            <Bar dataKey="count" radius={[4, 4, 0, 0]}>
              {expBuckets.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardCharts;
