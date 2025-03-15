import "./DropdownDown.css";

export default function DropdownDown({ className = "" }: DropdownDownProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_615_9216" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="0" y="1" width="15" height="14">
      <path d="M7.5 14.25C10.9519 14.25 13.75 11.4519 13.75 8C13.75 4.54813 10.9519 1.75 7.5 1.75C4.04813 1.75 1.25 4.54813 1.25 8C1.25 11.4519 4.04813 14.25 7.5 14.25Z" fill="white" stroke="white" stroke-width="1.25" stroke-linejoin="round"/>
      <path d="M10.3125 7.0625L7.5 9.875L4.6875 7.0625" stroke="black" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
      </mask>
      <g mask="url(#mask0_615_9216)">
      <path d="M0 0.5H15V15.5H0V0.5Z" fill="#8852E0"/>
      </g>
      </svg>
      
    </div>
  );
}

interface DropdownDownProps {
  className?: string;
}
