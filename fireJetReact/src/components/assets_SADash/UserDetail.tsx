import "./UserDetail.css";

export default function UserDetail({ className = "" }: UserDetailProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 38.08 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.4232 14.1667H28.2565V15.8334H22.4232V14.1667ZM23.2565 17.5001H28.2565V19.1667H23.2565V17.5001ZM21.5898 10.8334H28.2565V12.5001H21.5898V10.8334ZM13.2565 20.8334H21.5898V20.0001C21.5898 17.7026 19.7207 15.8334 17.4232 15.8334H15.7565C13.459 15.8334 11.5898 17.7026 11.5898 20.0001V20.8334H13.2565ZM16.5898 15.0001C18.2523 15.0001 19.5065 13.7459 19.5065 12.0834C19.5065 10.4209 18.2523 9.16675 16.5898 9.16675C14.9273 9.16675 13.6732 10.4209 13.6732 12.0834C13.6732 13.7459 14.9273 15.0001 16.5898 15.0001Z" fill="#8852E0"/>
      </svg>
      
    </div>
  );
}

interface UserDetailProps {
  className?: string;
}
