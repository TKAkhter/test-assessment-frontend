import React, { useState } from "react";
import axios from "axios";

const CreateUser: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateUser = async () => {
    try {
      const response = await axios.post("/api/createuser", { username, password });
      console.log("User created successfully:", response.data);
    } catch (error) {
      console.error("User creation failed:", error);
    }
  };

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
