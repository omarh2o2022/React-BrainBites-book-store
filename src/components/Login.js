import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [keepSigned, setKeepSigned] = useState(false);
    const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Please add text in USER NAME and PASSWORD');
    } else {
      // Redirect to App.js
      navigate('/app');
    }
  };

  return (
    <div className="login-container">
      <div>
        <label htmlFor="username">Enter any user name:  </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Enter any password:  </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={keepSigned}
            onChange={() => setKeepSigned(!keepSigned)}
          />
          Remember me
        </label>
      </div>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default Login;
