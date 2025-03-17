import { useState } from "react";
import Logout from "../components/assets/Logout";
import LogoTransparent from "../components/assets/LogoTransparent";
import T from "./T1";
import Line from "../components/assets/Line";
import DropdownDown from "../components/assets/DropdownDown";
import "./EditEmployeeDetail.css";
import AccountLogout from './AccountLogout';

export default function EditEmployeeDetail({
  className = "",
}: EditEmployeeDetailProps) 
{
  // State for editable input fields
  const [name, setName] = useState("Mary Jane");
  const [role, setRole] = useState("Singer");
  const [address, setAddress] = useState("12 Bukit Gombak Ave 3 #09-09");
  const [email, setEmail] = useState("MaryJane@gmail.com");
  const [workingHours, setWorkingHours] = useState("9am-5.30pm");
  const [skillsets, setSkillsets] = useState("Vocalist");





  return (
    <div className={`${className} edit-employee-detail-wrapper`}>
      <div className="edit-employee-detail-edit-employee-detail">

        {/* Navbar */}
        <div className="bo-schedule-view-nav-bar-system-admin">
          <LogoTransparent className="bo-schedule-view-logo-transparent" />
          <div className="bo-schedule-view-text">
            Welcome Back, Employee
          </div>
          <AccountLogout className="bo-schedule-view-logout" />
        </div>

        <div className="edit-employee-detail-t-employee-side-menu-mid-white-container-right-sidebar">
          <div className="edit-employee-detail-employee-side-menu">
            <div>Dashboard</div>
            <div>Project View</div>
            <div>Chat</div>
            <div>Time Swap</div>
          </div>

          <div className="edit-employee-detail-mid-white-container">
            <div className="edit-employee-detail-emp-roster">EmpRoster</div>

            {/* Profile Edit Section */}
            <div className="edit-employee-detail-ttt-edit-profile-edit-personnel-logo">
              <div className="edit-employee-detail-tt-edit-profile-edit-personnel-logo">
                <div className="edit-employee-detail-edit-profile">Edit Profile</div>
                <div className="edit-employee-detail-edit-personnel-logo">
                  <div className="edit-employee-detail-background" />
                  <div className="edit-employee-detail-background-1" />
                </div>
              </div>
            </div>

            {/* Editable Contact Form */}
            <div className="edit-employee-detail-tt-form-contact-form-contact">
              <div className="edit-employee-detail-form-contact">
                <div className="edit-employee-detail-ttt-name-input-taddress-input-temail-input">
                  <div className="edit-employee-detail-tt-name-input-taddress-input-temail-input">
                    
                    {/* Editable Name Field */}
                    <div className="edit-employee-detail-input-group">
                      <label>Name</label><br/>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="edit-employee-detail-input-field"
                      />
                    </div>

                    

                    
                    <div className="edit-employee-detail-input-group">
                      <label>Address</label><br/>
                      <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="edit-employee-detail-input-field"
                      />
                    </div>
                    {/* <T text="Email" text1="MaryJane@gmail.com" /> */}
                    <div className="edit-employee-detail-input-group">
                      <label>Email</label><br/>
                      <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="edit-employee-detail-input-field"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Role Section */}
              <div className="edit-employee-detail-form-contact-1">
                <div className="edit-employee-detail-input-group">
                      <label>Role</label><br/>
                      <input
                        type="text"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                        className="edit-employee-detail-input-field"
                      />
                    </div><br/>
              

    
                <div className="edit-employee-detail-input-group">
                      <label>Working Hours</label><br/>
                      <input
                        type="text"
                        value={workingHours}
                        onChange={(e) => setWorkingHours(e.target.value)}
                        className="edit-employee-detail-input-field"
                      />
                    </div><br/>
              

         

                <div className="edit-employee-detail-input-group">
                      <label>Skillset</label><br/>
                      <input
                        type="text"
                        value={skillsets}
                        onChange={(e) => setSkillsets(e.target.value)}
                        className="edit-employee-detail-input-field"
                      />
                    </div>
              


                <div className="edit-employee-detail-t-status">
                  <div className="edit-employee-detail-status">Status</div>
                </div>
                <div className="edit-employee-detail-t-filter-account-status">
                  <div className="edit-employee-detail-filter-account-status">
                    <div className="edit-employee-detail-activated">
                      <select name="status" id="status">
                        <option value="Active">Active</option>
                        <option value="Suspended">Suspended</option>
                      </select>
                    </div>
                    <Line className="edit-employee-detail-line" />
                    <DropdownDown className="edit-employee-detail-dropdown-down" />
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="edit-employee-detail-update-profile">
              <button className="edit-employee-detail-button">Update Profile</button>
            </div>
            <div className="edit-employee-detail-t-delete-profile">
              <div className="edit-employee-detail-delete-profile">
                <button className="edit-employee-detail-button-1">Delete Profile</button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="edit-employee-detail-t-2025emproster-all-rights-reserved">
          <div className="edit-employee-detail-emproster-all-rights-reserved">
            <span>
              {"©  2025 "}
              <span className="edit-employee-detail-text-1">{"EmpRoster. "}</span>
              All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface EditEmployeeDetailProps {
  className?: string;
}
