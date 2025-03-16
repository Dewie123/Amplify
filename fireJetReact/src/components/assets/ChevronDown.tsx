import "./ChevronDown.css";

export default function ChevronDown({ className = "" }: ChevronDownProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 6L8 10L12 6" stroke="#1E1E1E" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
    </div>
  );
}

interface ChevronDownProps {
  className?: string;
}
