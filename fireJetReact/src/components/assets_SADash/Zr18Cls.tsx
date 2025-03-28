import "./Zr18Cls.css";

export default function Zr18Cls({ className = "" }: Zr18ClsProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 139.13 139.13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.130859 0.521729C37.0305 0.521729 72.4189 15.1801 98.5109 41.2721C124.603 67.3641 139.261 102.752 139.261 139.652H78.3917C78.3917 118.896 70.1464 98.9901 55.4696 84.3134C40.7929 69.6366 20.8869 61.3913 0.130859 61.3913V0.521729Z" fill="#32BA05"/>
      </svg>
      
    </div>
  );
}

interface Zr18ClsProps {
  className?: string;
}
