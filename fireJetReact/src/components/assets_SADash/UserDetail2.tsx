import "./UserDetail2.css";

export default function UserDetail2({ className = "" }: UserDetail2Props) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 38.08 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.4232 14.1666H28.2565V15.8333H22.4232V14.1666ZM23.2565 17.5H28.2565V19.1666H23.2565V17.5ZM21.5898 10.8333H28.2565V12.5H21.5898V10.8333ZM13.2565 20.8333H21.5898V20C21.5898 17.7025 19.7207 15.8333 17.4232 15.8333H15.7565C13.459 15.8333 11.5898 17.7025 11.5898 20V20.8333H13.2565ZM16.5898 15C18.2523 15 19.5065 13.7458 19.5065 12.0833C19.5065 10.4208 18.2523 9.16663 16.5898 9.16663C14.9273 9.16663 13.6732 10.4208 13.6732 12.0833C13.6732 13.7458 14.9273 15 16.5898 15Z" fill="#8852E0"/>
      </svg>
      
    </div>
  );
}

interface UserDetail2Props {
  className?: string;
}
