import UserDetail1 from "../components/assets/UserDetail6";
import "./TUenCompanyNameSubsStatusSAViewUserDetailsRowGap.css";

export default function TUenCompanyNameSubsStatusSAViewUserDetailsRowGap({
  className = "",
  text = "53137217X",
  text1 = "GOOGLE CARS",
}: TUenCompanyNameSubsStatusSAViewUserDetailsRowGapProps) {
  return (
    <div
      className={`${className} t-uen-company-name-subs-status-saview-user-details-row-gap-t-uen-company-name-subs-status-saview-user-details-row-gap-7`}
    >
      <div className="t-uen-company-name-subs-status-saview-user-details-row-gap-ue-n" >
        <div className="t-uen-company-name-subs-status-saview-user-details-row-gap-t-text-3" >
          <div className="t-uen-company-name-subs-status-saview-user-details-row-gap-text-6" >
            {text}
          </div>
        </div>
      </div>
      <div className="t-uen-company-name-subs-status-saview-user-details-row-gap-company-name-1" >
        <div>{text1}</div>
      </div>
      <div className="t-uen-company-name-subs-status-saview-user-details-row-gap-subs-status-1" >
        <div>Subscribed</div>
      </div>
      <div className="t-uen-company-name-subs-status-saview-user-details-row-gap-sa-view-user-details" >
        <UserDetail1 className="t-uen-company-name-subs-status-saview-user-details-row-gap-user-detail-3" />
      </div>
      <div className="t-uen-company-name-subs-status-saview-user-details-row-gap-row-gap-1" >
        <div className="t-uen-company-name-subs-status-saview-user-details-row-gap-content-1" />
      </div>
    </div>
  );
}

interface TUenCompanyNameSubsStatusSAViewUserDetailsRowGapProps {
  className?: string;
  text: string;
  text1: string;
}
