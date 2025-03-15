import { useState } from "react";
import LogoNavbar from "./assets/LogoNavbar";
import Logout from "./assets/Logout";
import "./Login.css";

export default function Login({ className = "" }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // Handle the sign-in logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleForgotPassword = () => {
    // Handle the forgot password logic here
    console.log("Forgot password clicked");
  };

  return (
    <div className={`${className} login-login`}>
      <div className="login-t-navbar-system-admin">
        <div className="login-nav-bar-system-admin">
          <LogoNavbar className="login-logo-navbar" />
          <Logout className="login-logout" />
        </div>
      </div>
      <div className="login-tt-welcome-to-emproster">
        <div className="login-t-welcome-to-emproster">
          <div className="login-welcome-to-emproster">
            <span>
              <p className="login-para">Welcome to</p>
              <p className="login-para-1">EmpRoster</p>
            </span>
          </div>
        </div>
      </div>
      <div className="center-wrapper">
        <div className="login-form-log-in">
          <div className="login-label">Email</div>
          <div className="login-input">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="login-input-field"
            />
          </div>
          <div className="login-t-label">
            <div className="login-label-1">Password</div>
          </div>
          <div className="login-input-1">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="login-input-field"
            />
          </div>
          <div className="login-t-button">
            <button className="login-button" onClick={handleSignIn}>
              <span className="login-button-1">Sign In</span>
            </button>
          </div>
          <button>
            <div className="login-text-link" onClick={handleForgotPassword}>
              Forgot password?
            </div>
          </button>
          
        </div>
      </div>
    </div>
  );
}

interface LoginProps {
  className?: string;
}
