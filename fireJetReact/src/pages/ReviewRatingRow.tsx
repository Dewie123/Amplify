import Check_small from "../components/assets/Check_small1";
import "./ReviewRatingRow.css";

export default function Row({
  className = "",
  container1 = "",
  text = "Date",
  container2 = "",
  text1 = "Review",
  container3 = "",
  text2 = "Rating",
}: RowProps) {
  return (
    <div className={`${className} row-row-5`}>
      <div className={`${container1} row-cell`}>
        <div>{text}</div>
      </div>
      <div className={`${container2} row-cell-1`}>
        <div>{text1}</div>
      </div>
      <div className={`${container3} row-cell-2`}>
        <div>{text2}</div>
      </div>
      <div className="row-checkboxes">
        <div className="row-container">
          <Check_small className="row-check_small-1" />
        </div>
      </div>
    </div>
  );
}

interface RowProps {
  className?: string;
  container1: string;
  text: string;
  container2: string;
  text1: string;
  container3: string;
  text2: string;
}
