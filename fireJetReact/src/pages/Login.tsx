import { useState } from "react";
import LogoNavbar from "../components/assets/LogoNavbar";
import Logout from "../components/assets/Logout";
import "./Login.css";
import useRedirectHandler from "../utility/RedirectHandler";

export default function Login({ className = "" }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = useRedirectHandler();
  const handleSignIn = async () => {
    // Handle the sign-in logic here
    console.log("Email:", email);
    console.log("Password:", password);
    const body = {email: email, password: password};
    try {
      const response = await fetch('https://e27fn45lod.execute-api.ap-southeast-2.amazonaws.com/dev/account/login', {
        method: 'post',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'},
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        if (data.responseCode === 200){
          console.log('Login successful:', data);
          redirect(data.userType);
        }
        
        // Handle success, like storing a token or redirecting the user
      } else {
        throw new Error('Login failed');
      }
    } catch (err) {
      console.error('Error:', err);
      // Handle error (e.g., show an error message to the user)
    }
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
