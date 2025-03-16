import "./UserDetail1.css";

export default function UserDetail1({ className = "" }: UserDetail1Props) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 80.77 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M42.7308 14.1665H48.5641V15.8332H42.7308V14.1665ZM43.5641 17.4998H48.5641V19.1665H43.5641V17.4998ZM41.8975 10.8332H48.5641V12.4998H41.8975V10.8332ZM33.5641 20.8332H41.8975V19.9998C41.8975 17.7023 40.0283 15.8332 37.7308 15.8332H36.0641C33.7666 15.8332 31.8975 17.7023 31.8975 19.9998V20.8332H33.5641ZM36.8975 14.9998C38.56 14.9998 39.8141 13.7457 39.8141 12.0832C39.8141 10.4207 38.56 9.1665 36.8975 9.1665C35.235 9.1665 33.9808 10.4207 33.9808 12.0832C33.9808 13.7457 35.235 14.9998 36.8975 14.9998Z" fill="#8852E0"/>
      </svg>
      
    </div>
  );
}

interface UserDetail1Props {
  className?: string;
}
