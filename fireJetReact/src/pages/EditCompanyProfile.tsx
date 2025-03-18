import T from "./T";
import LogoNavbar from "../components/assets/LogoNavbar";
import Logout from "../components/assets/Logout";
import "./EditCompanyProfile.css";
import image from "../components/assets/image.png";
import BOSideMenu from './BOSideMenu';
import AccountLogout from './AccountLogout';
import InputField from "./InputField";

export default function EditCompanyProfile({
  
  className = "",
}: EditCompanyProfileProps) {

  function promptAlert(text: string){
    alert({text});
  }

  return (
    <div className={`${className} edit-company-profile-edit-company-profile`}>
      <div className="edit-company-profile-edit-company-profile-1">
        <div className="edit-company-profile-tt-navbar-system-admin-trectangle-8boside-menu">
          <div>
            <div className="edit-company-profile-nav-bar-system-admin">
              <div className="edit-company-profile-tt-logo-navbar-welcome-back-system-admin">
                <LogoNavbar className="edit-company-profile-logo-navbar" />
                <div className="edit-company-profile-welcome-back-system-admin">
                  Welcome Back, Business Owner
                </div>
              </div>
              <AccountLogout className="edit-company-profile-logout" />
            </div>
            <div className="edit-company-profile-t-rectangle">
              <div className="edit-company-profile-rectangle"></div>
            </div>
          </div>
          <div className="edit-company-profile-bo-side-menu">
            <div>
              <BOSideMenu />
            </div>
          </div>
        </div>
  
        <div className="middle-group">
          <div className="edit-company-profile-tt-update-company-details-ttform-contact-timage-6tbutton-button">
            <div className="edit-company-profile-update-company-details">
              Update Company Details
            </div>
            <div className="edit-company-profile-tt-form-contact-timage">
              <div className="edit-company-profile-t-form-contact-timage">
                <div className="edit-company-profile-form-contact">
                  <div className="edit-company-profile-ttt-company-name-input-taddress-input-temail-input">
                    <div className="edit-company-profile-tt-company-name-input-taddress-input-temail-input">
                      <InputField 
                        label="Company Name" 
                        defaultValue="" 
                      />
                      <InputField 
                        label="Address" 
                        defaultValue="" 
                      />
                      <InputField 
                        label="Email" 
                        defaultValue="" 
                      />
                    </div>
                  </div>
                </div>
                <div className="edit-company-profile-t-image">
                  <img
                    className="edit-company-profile-image"
                    src={image}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
  
  
            <div className="edit-company-profile-button-1">
              <button
                className="edit-company-profile-button-2"
                onClick={() => promptAlert("Issue Updated!")}
                style={{ cursor: "pointer" }} // Optional: shows it's clickable
              >
                Update Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  
interface EditCompanyProfileProps {
  className?: string;
}
