import '../../App.css';
import React, { useState } from "react";

function SignUpPage() {
  const [login, setLogin] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // add code to handle the form submission here,
    // such as sending the login, username, and password to a server
  };

  return (
    <form onSubmit={handleSubmit} >
      <label>
        Login
      </label>
      <br />
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpPage;
