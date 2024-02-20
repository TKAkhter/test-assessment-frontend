import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { JwtUserPayload, StoreRootState } from "../types";
import { useHistory } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state: StoreRootState) => state.user.token);

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_APP_URL}/api/login`, {
        username,
        password,
      });
      const token = response.data.token;
      const decoded: JwtUserPayload = jwtDecode(token);

      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          token: token,
          username: decoded.username,
          userId: decoded.userId,
        },
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  useEffect(() => {
    if (token) {
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
      <button onClick={() => history.push("/create-user")}>Create User</button>
    </div>
  );
};

export default Login;
