import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { auth, isFirebaseConfigured } from './config';

const requireAuth = () => {
  if (!auth) {
    throw new Error(
      'Firebase is not configured. Add keys to .env or use the preview dashboard links below.',
    );
  }
  return auth;
};

export const login = (email, password) =>
  signInWithEmailAndPassword(requireAuth(), email, password);

export const register = (email, password) =>
  createUserWithEmailAndPassword(requireAuth(), email, password);

export const logout = () => signOut(requireAuth());

export const subscribeToAuth = (callback) => {
  if (!isFirebaseConfigured) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
};
