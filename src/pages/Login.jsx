import React, { useState } from "react";
import Images from "../utils/images";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) return;

    setSuccess("✅ Login Successful!");
    console.log({ email, password, remember });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={Images.Login} alt="Login" />
      </div>

      <div className="login-right">
        <h2>Welcome Back</h2>
        <p>Securely manage your appointments and health records.</p>

        <form onSubmit={handleLogin}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          <div className="options">
            <div className="remember-me">
              <input
                type="checkbox"
                id="remember"
                checked={remember}
                onChange={() => setRemember(!remember)}
              />
              <label htmlFor="remember">Remember me</label>
            </div>

            <a href="#">Forgot Password?</a>
          </div>

          {success && <p className="success-text">{success}</p>}

          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>

        <p>
          Don't have an account? <a href="#">Sign Up</a>
        </p>

        <p className="encrypted">
          Your data is encrypted and HIPAA compliant.
        </p>
      </div>
    </div>
  );
}

export default Login;
