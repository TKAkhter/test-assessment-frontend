import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setToken } from "../redux/reducer";
import axios from "axios";
import { StoreRootState } from "../types";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state: StoreRootState) => state.auth.token);
  console.log("🚀 ~ token:", token);

  const handleLogin = async () => {
    try {
      // Call your backend API to authenticate the user and obtain a token
      const response = await axios.post(`${process.env.REACT_APP_APP_URL}/api/login`, {
        username,
        password,
      });
      const token = response.data.token; // Adjust this based on your backend response

      // Save the token using Redux
      dispatch(setToken(token));
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    if (token) {
      // Redirect to dashboard if token exists
      history.push("/dashboard");
    }
  }, [token, history]);

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
