import "./Check_small1.css";

export default function Check_small({ className = "" }: Check_smallProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 16.4L6 12.4L7.4 11L10 13.6L16.6 7L18 8.4L10 16.4Z" fill="white"/>
      </svg>
      
    </div>
  );
}

interface Check_smallProps {
  className?: string;
}
