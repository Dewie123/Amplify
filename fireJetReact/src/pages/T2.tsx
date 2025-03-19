import "./T2.css";

export default function T({
  className = "",
  container1 = "",
  container2 = "",
  text = "Registration Request",
  text1 = "3",
}: TProps) {
  return (
    <div
      className={`${container1} ${className} t-tt-registration-request-no-of-request-1`}
    >
      <div className={`${container2} t-t-registration-request-no-of-request`}>
        <div className="t-registration-request">{text}</div>
        <div className="t-component-8">{text1}</div>
      </div>
    </div>
  );
}

interface TProps {
  className?: string;
  container1: string;
  container2: string;
  text: string;
  text1: string;
}
