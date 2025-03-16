import "./Row1.css";

export default function Row({
  className = "",
  text = "John Smith",
  container1 = "",
  text1 = "Supervisor",
  text2 = "Directing, Play write",
  container2 = "",
}: RowProps) {
  return (
    <div className={`${className} row-row-4`}>
      <div className="row-cell-12">
        <div className="row-text-15">{text}</div>
      </div>
      <div className="row-cell-13">
        <div className={`${container1} row-text-16`}>{text1}</div>
      </div>
      <div className="row-cell-15">
        <div className="row-text-18">{text2}</div>
      </div>
      <div className={`${container2} row-cell-17`}>
        <div className="row-view-mc-requests-button-1">
          <div className="row-text-21">Update Details</div>
        </div>
        <div className="row-view-leave-requests">
          <div className="row-text-22">Resolve Issue</div>
        </div>
      </div>
    </div>
  );
}

interface RowProps {
  className?: string;
  container1: string;
  test: string;
  text1: string;
  text2: string;
  container2: string;
}
