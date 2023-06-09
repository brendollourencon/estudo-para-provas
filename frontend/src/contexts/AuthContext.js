import { Navigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useLogin } from "../services/authService";

let AuthContext = React.createContext({
  user: null,
  isAutenticated: false,
  loading: true,
  signIn: (token, name, email) => {},
  signOut: () => {},
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState({ email: null, password: null });
  const [isAutenticated, setIsAutenticated] = useState(false);
  let [loading, setLoading] = React.useState(true);

  const init = () => {
    if (!localStorage.getItem("token")) {
      setIsAutenticated(false);
      return;
    }

    setIsAutenticated(true);
  };

  useEffect(() => {
    setLoading(true);
    init();
    setLoading(false);
  }, []);

  const signIn = (newToken, name, email) => {
    localStorage.setItem("token", newToken);
    setUser({name, email})
    setIsAutenticated(true);
  };

  const signOut = () => {
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAutenticated,
        loading,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return React.useContext(AuthContext);
}

const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback) {
    fakeAuthProvider.isAuthenticated = true;
    callback();
  },
  signout(callback) {
    fakeAuthProvider.isAuthenticated = false;
    callback();
  },
};

export function RequireAuth({ children }) {
  let auth = useAuth();
  let location = useLocation();

  if (!auth.isAutenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
