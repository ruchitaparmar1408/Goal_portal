import { ROLES, ROLE_HOME } from './constants';

export const isEmployee = (role) => role === ROLES.EMPLOYEE;
export const isManager = (role) => role === ROLES.MANAGER;
export const isAdmin = (role) => role === ROLES.ADMIN;

export const getHomeRouteForRole = (role) =>
  ROLE_HOME[role] ?? '/login';

export const canManageTeam = (role) =>
  role === ROLES.MANAGER || role === ROLES.ADMIN;

export const canManageUsers = (role) => role === ROLES.ADMIN;
