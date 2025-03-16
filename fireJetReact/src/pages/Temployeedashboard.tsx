import "./T.css";

export default function T({
  className = "",
  container1 = "",
  container2 = "",
  text = "Pending swap requests",
  text1 = "3",
}: TProps) {
  return (
    <div
      className={`${container1} ${className} t-tt-pending-swap-requests-no-of-request-1`}
    >
      <div className={`${container2} t-t-pending-swap-requests-no-of-request`}>
        <div className="t-pending-swap-requests">{text}</div>
        <div className="t-component">{text1}</div>
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
