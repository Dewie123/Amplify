import "./Logout.css";

export default function Logout({ className = "" }: LogoutProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6 2.5C5.20435 2.5 4.44129 2.81607 3.87868 3.37868C3.31607 3.94129 3 4.70435 3 5.5V19.5C3 20.2956 3.31607 21.0587 3.87868 21.6213C4.44129 22.1839 5.20435 22.5 6 22.5H12C12.7956 22.5 13.5587 22.1839 14.1213 21.6213C14.6839 21.0587 15 20.2956 15 19.5V5.5C15 4.70435 14.6839 3.94129 14.1213 3.37868C13.5587 2.81607 12.7956 2.5 12 2.5H6ZM16.293 7.793C16.4805 7.60553 16.7348 7.50021 17 7.50021C17.2652 7.50021 17.5195 7.60553 17.707 7.793L21.707 11.793C21.8945 11.9805 21.9998 12.2348 21.9998 12.5C21.9998 12.7652 21.8945 13.0195 21.707 13.207L17.707 17.207C17.5184 17.3892 17.2658 17.49 17.0036 17.4877C16.7414 17.4854 16.4906 17.3802 16.3052 17.1948C16.1198 17.0094 16.0146 16.7586 16.0123 16.4964C16.01 16.2342 16.1108 15.9816 16.293 15.793L18.586 13.5H10C9.73478 13.5 9.48043 13.3946 9.29289 13.2071C9.10536 13.0196 9 12.7652 9 12.5C9 12.2348 9.10536 11.9804 9.29289 11.7929C9.48043 11.6054 9.73478 11.5 10 11.5H18.586L16.293 9.207C16.1055 9.01947 16.0002 8.76516 16.0002 8.5C16.0002 8.23484 16.1055 7.98053 16.293 7.793Z" fill="white"/>
      </svg>
      
    </div>
  );
}

interface LogoutProps {
  className?: string;
}
