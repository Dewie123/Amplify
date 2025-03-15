import "./BOLineDashboard.css";

export default function Line({ className = "" }: LineProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 148 1" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line y1="0.5" x2="148" y2="0.5" stroke="#BAB8B8"/>
      </svg>
      
    </div>
  );
}

interface LineProps {
  className?: string;
}
