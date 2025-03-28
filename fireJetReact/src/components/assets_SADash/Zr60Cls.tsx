import "./Zr60Cls.css";

export default function Zr60Cls({ className = "" }: Zr60ClsProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 415 113.43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 61.7977H131.811C133.187 61.7977 134.507 62.0008 135.48 62.3622C136.453 62.7236 137 63.2138 137 63.7249V111.903C137 112.414 136.453 112.904 135.48 113.266C134.507 113.627 133.187 113.83 131.811 113.83H0V61.7977Z" fill="#3B82F6"/>
      <path d="M0 0.39917H409.792C411.173 0.39917 412.498 0.602207 413.475 0.963614C414.451 1.32502 415 1.81519 415 2.3263V50.5046C415 51.0157 414.451 51.5058 413.475 51.8673C412.498 52.2287 411.173 52.4317 409.792 52.4317H0V0.39917Z" fill="#3B82F6"/>
      </svg>
      
    </div>
  );
}

interface Zr60ClsProps {
  className?: string;
}
