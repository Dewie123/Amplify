import LogoNavbar from "../components/assets/LogoNavbar";
import "./Registration.css";

export default function Registration({ className = "" }: RegistrationProps) {
  return (
    <div className={`${className} registration-registration`}>
      <div className="registration-t-navbar-system-admin">
        <div className="registration-nav-bar-system-admin">
          <LogoNavbar className="registration-logo-navbar" />
        </div>
      </div>
      <div className="registration-app-name">
        <div className="registration-background" />
        <div className="registration-background-1" />
        <div className="registration-title">EmpRoster</div>
        <div className="registration-subtitle">
          Smart Employee Scheduling
        </div>
      </div>
      <div className="registration-form-register">
        
        <div className="registration-name">Name</div>
        <div className="registration-input">

          <input className="registration-value" placeholder="Enter your name"/>
        </div>
        <div className="registration-t-company-name">
          <div className="registration-company-name">Company Name</div>
        </div>
        <div className="registration-input-1">
          <input className="registration-value" placeholder="Enter your Company Name"/>
        </div>
        <div className="registration-t-company-email-address">
          <div className="registration-company-email-address">
            Company Email Address
          </div>
        </div>
        <div className="registration-input-2">
          <input className="registration-value" placeholder="Enter your Email"/>
        </div>
        <div className="registration-t-password">
          <div className="registration-password">Password</div>
        </div>
        <div className="registration-input-3">
          <input className="registration-value" placeholder="Enter your password" type="password"/>
        </div>
        <div className="registration-t-button">
          <div className="registration-button">
            <button>
              <div className="registration-button-1">Register</div>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

interface RegistrationProps {
  className?: string;
}
