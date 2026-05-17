export const ROLES = {
  EMPLOYEE: 'employee',
  MANAGER: 'manager',
  ADMIN: 'admin',
};

export const GOAL_STATUS = {
  NOT_STARTED: 'not_started',
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  OVERDUE: 'overdue',
};

export const ROUTES = {
  LOGIN: '/login',
  EMPLOYEE: '/employee',
  MANAGER: '/manager',
  ADMIN: '/admin',
  PREVIEW_EMPLOYEE: '/preview/employee',
  PREVIEW_MANAGER: '/preview/manager',
  PREVIEW_ADMIN: '/preview/admin',
};

export const ROLE_HOME = {
  [ROLES.EMPLOYEE]: ROUTES.EMPLOYEE,
  [ROLES.MANAGER]: ROUTES.MANAGER,
  [ROLES.ADMIN]: ROUTES.ADMIN,
};
