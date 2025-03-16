import "./TView.css";

export default function TView({
  className = "",
  container1 = "",
  container2 = "",
  text = "View Attendance Record",
  text1 = "View Received Requests",
}: TViewProps) {
  return (
    <div
      className={`${container1} ${className} t-view-t-view-attendance-record-button-view-attendance-record-button-1`}
    >
      <div className={`${container2} t-view-view-attendance-record`}>
        {text}
      </div>
      <div className="t-view-view-attendance-record-1">{text1}</div>
    </div>
  );
}

interface TViewProps {
  className?: string;
  container1: string;
  container2: string;
  text: string;
  text1: string;
}
