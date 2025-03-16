import LogoTransparent from "../components/assets/LogoTransparent1";
import Logout from "../components/assets/Logout";
import BgMidWhiteContainer from "../components/assets/BgMidWhiteContainer";
import "./EmployeeSendReceiveMessage.css";

export default function EmployeeSendReceiveMessage({
  className = "",
}: EmployeeSendReceiveMessageProps) {
  return (
    <div className={`${className} employee-send-receive-message-wrapper`}>
      <div className="employee-send-receive-message-employee-send-receive-message" >
        <div className="employee-send-receive-message-nav-bar-system-admin">
          <LogoTransparent className="employee-send-receive-message-logo-transparent" />
          <div className="employee-send-receive-message-text">
            Welcome Back, Employee
          </div>
          <Logout className="employee-send-receive-message-logout" />
        </div>
        <div className="employee-send-receive-message-t-employee-side-menu-ttbg-mid-white-container-chatwith-io" >
          <div className="employee-send-receive-message-employee-side-menu">
            <div>Dashboard</div>
            <div>Project View</div>
            <div className="employee-send-receive-message-t-chat">
              <div>Chat</div>
            </div>
            <div className="employee-send-receive-message-t-time-swap">
              <div>Time Swap</div>
            </div>
          </div>
          <div className="employee-send-receive-message-tt-bg-mid-white-container-chatwith-io" >
            <div className="employee-send-receive-message-t-bg-mid-white-container-chatwith-io" >
              <BgMidWhiteContainer className="employee-send-receive-message-bg-mid-white-container" />
              <div className="employee-send-receive-message-chat-with-io">
                ChatWith.io
              </div>
            </div>
          </div>
        </div>
        <div className="employee-send-receive-message-t-2025emproster-all-rights-reserved" >
          <div className="employee-send-receive-message-emproster-all-rights-reserved" >
            <span>
              {"©  2025 "}
              <span className="employee-send-receive-message-text-1">
                {"EmpRoster. "}
              </span>
              All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface EmployeeSendReceiveMessageProps {
  className?: string;
}
