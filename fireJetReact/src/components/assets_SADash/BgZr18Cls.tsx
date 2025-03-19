import "./BgZr18Cls.css";

export default function BgZr18Cls({ className = "" }: BgZr18ClsProps) {
  return (
    <div className={`${className}`}>
      <div style={{"width":"100%","height":"100%","backgroundColor":"gray","border":"1px solid darkgray","display":"flex","justifyContent":"center","alignItems":"center","overflow":"clip","fontSize":"20px"}}>
        246:10224
      </div>
      
    </div>
  );
}

interface BgZr18ClsProps {
  className?: string;
}
