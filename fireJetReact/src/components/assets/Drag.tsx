import "./Drag.css";

export default function Drag({ className = "" }: DragProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 7.33 7.33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.523 0.353516L0.353516 6.523M6.98064 3.89589L3.8959 6.98063" stroke="#B3B3B3"/>
      </svg>
      
    </div>
  );
}

interface DragProps {
  className?: string;
}
