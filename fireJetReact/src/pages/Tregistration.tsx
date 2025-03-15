import "./Tregistration.css";

export default function T({
  className = "",
  text = "Company Name",
  text1 = "Yishun Cafe 123 Pte. Ltd.",
}: TProps) {
  return (
    <div className={`${className} t-t-company-name-input-1`}>
      <div className="t-company-name">{text}</div>
      <div className="t-input">
        <div className="t-yishun-cafe-123pte-ltd">{text1}</div>
      </div>
    </div>
  );
}

interface TProps {
  className?: string;
  text: string;
  text1: string;
}
