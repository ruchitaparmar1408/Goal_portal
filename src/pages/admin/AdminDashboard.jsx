import { DashboardLayout } from '../../components';
import { GoalProgressChart, TeamPerformanceChart } from '../../charts';
import { ROUTES } from '../../utils';

const NAV_LINKS = [
  { to: ROUTES.ADMIN, label: 'Dashboard' },
  { to: `${ROUTES.ADMIN}/users`, label: 'Users' },
  { to: `${ROUTES.ADMIN}/settings`, label: 'Settings' },
];

export default function AdminDashboard() {
  return (
    <DashboardLayout
      title="Organization"
      brand="Admin Portal"
      links={NAV_LINKS}
    >
      <h2 className="dashboard-page__title">Organization Dashboard</h2>
      <p className="dashboard-page__subtitle">
        Manage users, roles, and organization-wide goal metrics
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-card__label">Total Users</p>
          <p className="stat-card__value">48</p>
        </div>
        <div className="stat-card">
          <p className="stat-card__label">Active Goals</p>
          <p className="stat-card__value">126</p>
        </div>
        <div className="stat-card">
          <p className="stat-card__label">Teams</p>
          <p className="stat-card__value">6</p>
        </div>
        <div className="stat-card">
          <p className="stat-card__label">Org Completion</p>
          <p className="stat-card__value">68%</p>
        </div>
      </div>

      <div className="charts-grid">
        <GoalProgressChart title="Organization Goal Progress" />
        <TeamPerformanceChart title="Cross-Team Performance" />
      </div>
    </DashboardLayout>
  );
}
