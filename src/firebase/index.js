export { default as firebaseApp, auth, db, isFirebaseConfigured } from './config';
export { login, register, logout, subscribeToAuth } from './auth';
export {
  COLLECTIONS,
  getUserProfile,
  getGoalsByUser,
  getGoalsByTeam,
  createGoal,
  updateGoal,
  deleteGoal,
} from './firestore';
