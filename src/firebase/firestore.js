import {
  collection,
  doc,
  getDoc,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './firebase';

const requireDb = () => {
  if (!db) throw new Error('Firebase is not configured.');
  return db;
};

export const COLLECTIONS = {
  USERS: 'users',
  GOALS: 'goals',
  TEAMS: 'teams',
};

export const getUserProfile = async (userId) => {
  const snap = await getDoc(doc(requireDb(), COLLECTIONS.USERS, userId));
  return snap.exists() ? { id: snap.id, ...snap.data() } : null;
};

export const getGoalsByUser = async (userId) => {
  const q = query(
    collection(requireDb(), COLLECTIONS.GOALS),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc'),
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const getGoalsByTeam = async (teamId) => {
  const q = query(
    collection(requireDb(), COLLECTIONS.GOALS),
    where('teamId', '==', teamId),
    orderBy('createdAt', 'desc'),
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const createGoal = async (goalData) => {
  const ref = await addDoc(collection(requireDb(), COLLECTIONS.GOALS), {
    ...goalData,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  });
  return ref.id;
};

export const updateGoal = async (goalId, updates) => {
  await updateDoc(doc(requireDb(), COLLECTIONS.GOALS, goalId), {
    ...updates,
    updatedAt: serverTimestamp(),
  });
};

export const deleteGoal = async (goalId) => {
  await deleteDoc(doc(requireDb(), COLLECTIONS.GOALS, goalId));
};
