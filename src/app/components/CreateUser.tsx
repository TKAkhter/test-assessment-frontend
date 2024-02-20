import React, { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { JwtUserPayload, StoreRootState } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const CreateUser: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector((state: StoreRootState) => state.user.token);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleCreateUser = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_APP_URL}/api/createuser`, {
        username,
        password,
      });
      console.log("User created successfully:", response.data);
      const { data } = await axios.post(`${process.env.REACT_APP_APP_URL}/api/login`, {
        username,
        password,
      });
      const token = data.token;
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
      console.error("User creation failed:", error);
    }
  };

  useEffect(() => {
    if (token) {
      history.push("/dashboard");
    }
  }, [token, history]);

  return (
    <div>
      <h1>Create User</h1>
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
      <button onClick={handleCreateUser}>Create User</button>
    </div>
  );
};

export default CreateUser;
