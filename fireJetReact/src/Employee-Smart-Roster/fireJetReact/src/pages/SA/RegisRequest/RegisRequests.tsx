import RegisReqController from "../../../controller/RegisReqController";
import SASide from "../../../components/SideMenu/SASide";
import RegisReq from "../../../components/sa/Registration_Request/RegisReq";
import "./RegisRequests.css"
import "../../../../public/styles/common.css";

// Access the function from the default export
const { GetRegistrationRequestData } = RegisReqController;

const RegisRequests = () => {

    return (
        <div className="RegisRequests">
            <div className="side-menu">
                <SASide />
            </div>
            <div className="content">
                <RegisReq />
            </div>
        </div>
    )
}

export default RegisRequests;