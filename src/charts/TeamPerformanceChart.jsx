import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const SAMPLE_DATA = [
  { month: 'Jan', completed: 12, target: 15 },
  { month: 'Feb', completed: 18, target: 15 },
  { month: 'Mar', completed: 14, target: 15 },
  { month: 'Apr', completed: 20, target: 15 },
];

export default function TeamPerformanceChart({
  data = SAMPLE_DATA,
  title = 'Team Performance',
}) {
  return (
    <div className="chart-card">
      <h3 className="chart-card__title">{title}</h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="completed"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="target"
            stroke="#64748b"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
