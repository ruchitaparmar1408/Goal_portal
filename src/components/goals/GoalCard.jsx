import { capitalize } from '../../utils';

export default function GoalCard({ goal }) {
  const { title, description, progress = 0, status, dueDate } = goal;

  return (
    <article className="goal-card">
      <h3 className="goal-card__title">{title}</h3>
      {description && <p className="goal-card__meta">{description}</p>}
      {dueDate && <p className="goal-card__meta">Due: {dueDate}</p>}
      <div className="goal-card__progress" aria-hidden="true">
        <div
          className="goal-card__progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="goal-card__status">{capitalize(status)}</span>
    </article>
  );
}
