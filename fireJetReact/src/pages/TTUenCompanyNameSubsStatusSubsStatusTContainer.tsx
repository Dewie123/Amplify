import Check_small from "../components/assets/Check_small";
import "./TTUenCompanyNameSubsStatusSubsStatusTContainer.css";

export default function TTUenCompanyNameSubsStatusSubsStatusTContainer({
  className = "",
  text = "Mother is sick - URGENT swap",
  text1 = "12/02/2021",
}: TTUenCompanyNameSubsStatusSubsStatusTContainerProps) {
  return (
    <div
      className={`${className} tt-uen-company-name-subs-status-subs-status-tcontainer-tt-uen-company-name-subs-status-subs-status-tcontainer-7`}
    >
      <div className="tt-uen-company-name-subs-status-subs-status-tcontainer-t-uen-company-name-subs-status-subs-status" >
        <div className="tt-uen-company-name-subs-status-subs-status-tcontainer-uen" >
          <div className="tt-uen-company-name-subs-status-subs-status-tcontainer-t-text-4" >
            <div className="tt-uen-company-name-subs-status-subs-status-tcontainer-text-6" >
              1231EID
            </div>
          </div>
        </div>
        <div className="tt-uen-company-name-subs-status-subs-status-tcontainer-company-name" >
          <div>{text}</div>
        </div>
        <div className="tt-uen-company-name-subs-status-subs-status-tcontainer-subs-status" >
          <div>{text1}</div>
        </div>
        <div className="tt-uen-company-name-subs-status-subs-status-tcontainer-subs-status-1" >
          <div>12pm-12am</div>
        </div>
      </div>
      <div className="tt-uen-company-name-subs-status-subs-status-tcontainer-container" >
        <Check_small className="tt-uen-company-name-subs-status-subs-status-tcontainer-check_small-1" />
      </div>
    </div>
  );
}

interface TTUenCompanyNameSubsStatusSubsStatusTContainerProps {
  className?: string;
  text: string;
  text1: string;
}
