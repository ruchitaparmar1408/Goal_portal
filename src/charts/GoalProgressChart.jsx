import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const SAMPLE_DATA = [
  { name: 'Q1', progress: 65 },
  { name: 'Q2', progress: 80 },
  { name: 'Q3', progress: 45 },
  { name: 'Q4', progress: 90 },
];

export default function GoalProgressChart({ data = SAMPLE_DATA, title = 'Goal Progress' }) {
  return (
    <div className="chart-card">
      <h3 className="chart-card__title">{title}</h3>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis domain={[0, 100]} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Bar dataKey="progress" fill="#2563eb" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
