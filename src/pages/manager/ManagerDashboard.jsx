import { DashboardLayout } from '../../components';
import { GoalProgressChart, TeamPerformanceChart } from '../../charts';
import { ROUTES } from '../../utils';

const NAV_LINKS = [
  { to: ROUTES.MANAGER, label: 'Dashboard' },
  { to: `${ROUTES.MANAGER}/team`, label: 'Team Goals' },
];

export default function ManagerDashboard() {
  return (
    <DashboardLayout
      title="Team Overview"
      brand="Manager Portal"
      links={NAV_LINKS}
    >
      <h2 className="dashboard-page__title">Team Overview</h2>
      <p className="dashboard-page__subtitle">
        Monitor team goals, approvals, and performance
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-card__label">Team Members</p>
          <p className="stat-card__value">8</p>
        </div>
        <div className="stat-card">
          <p className="stat-card__label">Goals On Track</p>
          <p className="stat-card__value">12</p>
        </div>
        <div className="stat-card">
          <p className="stat-card__label">Pending Reviews</p>
          <p className="stat-card__value">3</p>
        </div>
        <div className="stat-card">
          <p className="stat-card__label">Completion Rate</p>
          <p className="stat-card__value">72%</p>
        </div>
      </div>

      <div className="charts-grid">
        <TeamPerformanceChart />
        <GoalProgressChart title="Team Goal Progress" />
      </div>
    </DashboardLayout>
  );
}
