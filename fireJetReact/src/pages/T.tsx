import "./T.css";

export default function T({
  className = "",
  text = "Name",
  text1 = "Marry Jane",
}: TProps) {
  return (
    <div className={`${className} t-t-name-input-1`}>
      <div className="t-name">{text}</div>
      <div className="t-input-3">
        <div className="t-marry-jane">{text1}</div>
      </div>
    </div>
  );
}

interface TProps {
  className?: string;
  text: string;
  text1: string;
}
