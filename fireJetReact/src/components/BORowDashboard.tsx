import "./BORowDashboard.css";

export default function Row({
  className = "",
  container1 = "",
  text = "26 October 2025                     ",
  text1 = " Upcoming",
}: RowProps) {
  return (
    <div className={`${className} row-row-9`}>
      <div className="row-cell-4">
        <div className={`${container1} row-text-13`}>
          <span>
            <span>{text}</span>
            <span className="row-text-14">
              {" McPherson Branch                                    "}
            </span>
            <span className="row-text-15">
              {" 9am - 5pm                                             "}
            </span>
            <span className="row-text-16">{text1}</span>
          </span>
        </div>
      </div>
    </div>
  );
}

interface RowProps {
  className?: string;
  container1: string;
  text: string;
  text1: string;
}
