import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { logout, isFirebaseConfigured } from '../../firebase';
import { capitalize, ROUTES } from '../../utils';

export default function Header({ title }) {
  const { user, profile } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (!isFirebaseConfigured) {
      navigate(ROUTES.LOGIN);
      return;
    }
    await logout();
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {profile && (
          <span>
            {profile.displayName || user?.email} · {capitalize(profile.role)}
          </span>
        )}
        <button type="button" onClick={handleLogout} className="btn-primary">
          Log out
        </button>
      </div>
    </header>
  );
}
