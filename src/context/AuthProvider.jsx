import { useEffect, useState } from 'react';
import { AuthContext } from './authContext';
import { subscribeToAuth, getUserProfile } from '../firebase';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = subscribeToAuth(async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        const userProfile = await getUserProfile(firebaseUser.uid);
        setProfile(userProfile);
      } else {
        setProfile(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = { user, profile, loading, setProfile };

  return (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
}
