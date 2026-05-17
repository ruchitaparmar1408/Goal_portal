import { useState } from 'react';
import { GOAL_STATUS } from '../../utils';

const defaultValues = {
  title: '',
  description: '',
  status: GOAL_STATUS.NOT_STARTED,
  progress: 0,
};

export default function GoalForm({ initialValues, onSubmit, submitLabel = 'Save Goal' }) {
  const [form, setForm] = useState({ ...defaultValues, ...initialValues });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await onSubmit(form);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="goal-form" onSubmit={handleSubmit}>
      <div className="goal-form__field">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </div>
      <div className="goal-form__field">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={3}
        />
      </div>
      <div className="goal-form__field">
        <label htmlFor="status">Status</label>
        <select id="status" name="status" value={form.status} onChange={handleChange}>
          {Object.values(GOAL_STATUS).map((s) => (
            <option key={s} value={s}>
              {s.replace('_', ' ')}
            </option>
          ))}
        </select>
      </div>
      <div className="goal-form__actions">
        <button type="submit" className="btn-primary" disabled={submitting}>
          {submitting ? 'Saving...' : submitLabel}
        </button>
      </div>
    </form>
  );
}
