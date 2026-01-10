import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { onAuthChange, logOut } from '../firebase/authService';
import { useToast } from '../components/common/Toast';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const { addToast, ToastComponent } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthChange((newUser) => {
      const wasLoggedIn = user !== null;
      const isNowLoggedIn = newUser !== null;

      setUser(newUser);
      setLoading(false);

      // Show welcome notification only after first load and when logging in
      if (!isFirstLoad && isNowLoggedIn && !wasLoggedIn) {
        addToast(`Welcome back, ${newUser.displayName || 'User'}!`, 'success');
      }
      
      if (isFirstLoad) {
        setIsFirstLoad(false);
      }
    });

    return () => unsubscribe();
  }, [user, isFirstLoad, addToast]);

  const signOut = useCallback(async () => {
    const result = await logOut();
    if (result.success) {
      setUser(null);
      addToast('You have been logged out successfully', 'info');
    }
    return result;
  }, [addToast]);

  const value = {
    user,
    loading,
    signOut,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      <ToastComponent />
    </AuthContext.Provider>
  );
};

export default AuthContext;
