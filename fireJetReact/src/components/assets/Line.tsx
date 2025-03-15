import "./Line.css";

export default function Line({ className = "" }: LineProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 1 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0.5" y1="20" x2="0.5" stroke="#374962"/>
      </svg>
      
    </div>
  );
}

interface LineProps {
  className?: string;
}
