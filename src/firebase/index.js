export { default as firebaseApp, auth, db, isFirebaseConfigured } from './firebase';
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
