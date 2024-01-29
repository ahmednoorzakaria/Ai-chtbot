import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type User = {
  name: string;
  email: string;
};

type UserAuth = {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, password: string, email: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<UserAuth | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    // Fetch if the user's cookies are valid to skip login
  }, []);

  const login = async (email: string, password: string) => {
    // Implement login logic
  };

  const signup = async (name: string, email: string, password: string) => {
    // Implement signup logic
  };

  const logout = async () => {
    // Implement logout logic
  };

  const value: UserAuth = {
    user,
    isLoggedIn,
    login,
    logout,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
