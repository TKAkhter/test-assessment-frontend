import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { StoreRootState } from "../types";

interface AuthMiddlewareProps {
  children: React.ReactNode;
}

const AuthMiddleware: React.FC<AuthMiddlewareProps> = ({ children }) => {
  const token = useSelector((state: StoreRootState) => state.auth.token);
  const history = useHistory();

  // Check if token exists, if not, redirect to login page
  React.useEffect(() => {
    if (!token) {
      history.push("/login");
    }
  }, [token, history]);

  return <>{children}</>;
};

export default AuthMiddleware;
