import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login, isFirebaseConfigured } from '../../firebase';
import { getHomeRouteForRole, ROUTES } from '../../utils';
import { useAuth } from '../../hooks/useAuth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const { profile } = useAuth();

  useEffect(() => {
    if (profile?.role) {
      navigate(getHomeRouteForRole(profile.role), { replace: true });
    }
  }, [profile, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSubmitting(true);
    try {
      await login(email, password);
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-card__title">Goal Portal</h1>
        <p className="auth-card__subtitle">Sign in to track and manage your goals</p>

        {!isFirebaseConfigured && (
          <div className="demo-banner">
            <p>Firebase is not configured yet. Explore the UI with preview dashboards:</p>
            <div className="demo-banner__links">
              <Link to={ROUTES.PREVIEW_EMPLOYEE}>Employee</Link>
              <Link to={ROUTES.PREVIEW_MANAGER}>Manager</Link>
              <Link to={ROUTES.PREVIEW_ADMIN}>Admin</Link>
            </div>
          </div>
        )}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-form__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={isFirebaseConfigured}
              autoComplete="email"
              disabled={!isFirebaseConfigured}
            />
          </div>
          <div className="auth-form__field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required={isFirebaseConfigured}
              autoComplete="current-password"
              disabled={!isFirebaseConfigured}
            />
          </div>
          {error && <p className="auth-form__error">{error}</p>}
          <button
            type="submit"
            className="btn-primary"
            disabled={submitting || !isFirebaseConfigured}
          >
            {submitting ? 'Signing in...' : 'Sign in'}
          </button>
        </form>
      </div>
    </div>
  );
}
