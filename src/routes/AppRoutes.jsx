import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProtectedRoute } from '../components';
import { LoginPage, EmployeeDashboard, ManagerDashboard, AdminDashboard } from '../pages';
import { ROUTES, ROLES, getHomeRouteForRole } from '../utils';
import { isFirebaseConfigured } from '../firebase';
import { useAuth } from '../hooks/useAuth';
import { Loader } from '../components';

function RootRedirect() {
  const { user, profile, loading } = useAuth();

  if (loading) return <Loader />;
  if (!isFirebaseConfigured) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }
  if (!user) return <Navigate to={ROUTES.LOGIN} replace />;
  if (profile?.role) {
    return <Navigate to={getHomeRouteForRole(profile.role)} replace />;
  }
  return <Navigate to={ROUTES.LOGIN} replace />;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootRedirect />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />

        <Route path={ROUTES.PREVIEW_EMPLOYEE} element={<EmployeeDashboard />} />
        <Route path={ROUTES.PREVIEW_MANAGER} element={<ManagerDashboard />} />
        <Route path={ROUTES.PREVIEW_ADMIN} element={<AdminDashboard />} />

        <Route
          path={ROUTES.EMPLOYEE}
          element={
            <ProtectedRoute allowedRoles={[ROLES.EMPLOYEE]}>
              <EmployeeDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.MANAGER}
          element={
            <ProtectedRoute allowedRoles={[ROLES.MANAGER]}>
              <ManagerDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path={ROUTES.ADMIN}
          element={
            <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
