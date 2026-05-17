import { DashboardLayout, GoalCard } from '../../components';
import { GoalProgressChart } from '../../charts';
import { ROUTES, GOAL_STATUS } from '../../utils';

const NAV_LINKS = [{ to: ROUTES.EMPLOYEE, label: 'Dashboard' }];

const SAMPLE_GOALS = [
  {
    id: '1',
    title: 'Complete onboarding training',
    description: 'Finish all modules by end of month',
    progress: 75,
    status: GOAL_STATUS.IN_PROGRESS,
    dueDate: 'May 30, 2026',
  },
  {
    id: '2',
    title: 'Ship feature MVP',
    description: 'Deliver v1 of goal tracking UI',
    progress: 40,
    status: GOAL_STATUS.IN_PROGRESS,
    dueDate: 'Jun 15, 2026',
  },
];

export default function EmployeeDashboard() {
  return (
    <DashboardLayout
      title="My Goals"
      brand="Employee Portal"
      links={NAV_LINKS}
    >
      <h2 className="dashboard-page__title">My Goals</h2>
      <p className="dashboard-page__subtitle">
        Track your personal goals and progress
      </p>

      <div className="stats-grid">
        <div className="stat-card">
          <p className="stat-card__label">Active Goals</p>
          <p className="stat-card__value">4</p>
        </div>
        <div className="stat-card">
          <p className="stat-card__label">Completed</p>
          <p className="stat-card__value">2</p>
        </div>
        <div className="stat-card">
          <p className="stat-card__label">Avg. Progress</p>
          <p className="stat-card__value">58%</p>
        </div>
      </div>

      <div className="charts-grid" style={{ marginBottom: '2rem' }}>
        <GoalProgressChart />
      </div>

      <div className="goals-grid">
        {SAMPLE_GOALS.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </div>
    </DashboardLayout>
  );
}
