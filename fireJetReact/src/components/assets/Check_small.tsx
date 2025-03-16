import "./Check_small.css";

export default function Check_small({ className = "" }: Check_smallProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 16.9L6 12.9L7.4 11.5L10 14.1L16.6 7.5L18 8.9L10 16.9Z" fill="white"/>
      </svg>
      
    </div>
  );
}

interface Check_smallProps {
  className?: string;
}
