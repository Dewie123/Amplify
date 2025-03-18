import { useNavigate } from "react-router-dom";
import "./Row4.css";

export default function Row({
  className = "",
  text = "John Smith",
  text1 = "Supervisor",
  text2 = "Directing, Play write",
  workingHours = "9am-5.30pm",
  status = "Active",
}: RowProps) {
  const navigate = useNavigate();

  return (
    <div className={`${className} bo-department-roles-view-row`}>
      <div className="bo-department-roles-view-cell-6">
        <div className="bo-department-roles-view-text-6">{text}</div>
      </div>
      <div className="bo-department-roles-view-cell-7">
        <div className="bo-department-roles-view-text-7">{text1}</div>
      </div>
      <div className="bo-department-roles-view-cell-8">
        <div className="bo-department-roles-view-text-8">{workingHours}</div>
      </div>
      <div className="bo-department-roles-view-cell-9">
        <div className="bo-department-roles-view-text-9">{text2}</div>
      </div>
      <div className="bo-department-roles-view-cell-10">
        <div className="bo-department-roles-view-text-10">{status}</div>
      </div>
      <div className="bo-department-roles-view-cell-11">
        <div
          className="bo-department-roles-view-text-11"
          onClick={() => navigate("/bo-edit-team-member-view")}
          style={{ cursor: "pointer" }}
        >
          Edit Details
        </div>
        <div className="bo-department-roles-view-t-view-mc-requests-button">
          <div
            className="bo-department-roles-view-view-mc-requests-button"
            onClick={() => navigate("/bo-department-roles-mc-view")}
            style={{ cursor: "pointer" }}
          >
            <div className="bo-department-roles-view-text-12">
              View MC Requests
            </div>
          </div>
        </div>
        <div
          className="bo-department-roles-view-text-13"
          onClick={() => navigate("/bo-department-roles-leave-view")}
          style={{ cursor: "pointer" }}
        >
          View Leave Requests
        </div>
      </div>
    </div>
  );
}

interface RowProps {
  className?: string;
  text: string;
  text1: string;
  text2: string;
  workingHours?: string;
  status?: string;
}
