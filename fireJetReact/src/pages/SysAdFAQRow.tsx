import Check_small from "../components/assets/Check_small1";
import "./SysAdFAQRow.css";

export default function SysRow({
  className = "",
  container1 = "",
  text = "FAQs",
  container2 = "",
  text1 = "Answer",
}: RowProps) {
  return (
    <div className={`${className} row-row-5`}>
      <div className={`${container1} row-cell-2`}>
        <div>{text}</div>
      </div>
      <div className={`${container2} row-cell-3`}>
        <div>{text1}</div>
      </div>
      <div className="row-checkboxes-1">
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
}
