import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./SASide.css";
import "../../../public/styles/common.css"

const SASide = () => {
    useEffect(() => {
        // Add event listeners to all .main elements
        const mainElements = document.querySelectorAll(".main");
    
        mainElements.forEach((main) => {
          main.addEventListener("click", () => {
            // Remove active class and hide all sub-menus
            mainElements.forEach((el) => {
              el.classList.remove("active");
              const subMenu = el.nextElementSibling as HTMLElement;
              if (subMenu && subMenu.classList.contains("sub-menu")) {
                subMenu.style.display = "none";
              }
            });
    
            // Add active class to the clicked .main
            main.classList.add("active");
    
            // Display the corresponding sub-menu
            const subMenu = main.nextElementSibling as HTMLElement;
            if (subMenu && subMenu.classList.contains("sub-menu")) {
              subMenu.style.display = "flex";
            }
          });
        });
    
        // Cleanup event listeners on component unmount
        return () => {
          mainElements.forEach((main) => {
            main.removeEventListener("click", () => {});
          });
        };
      }, []);

    return (
        <div className="side-menu">
            <div className="main">USER</div>
            <div className="sub-menu user">
                <Link to="/user-management" className="sub-link-1">
                    Users Management
                </Link>
                <Link to="/system-admin-register-requests" className="sub-link-2">
                    Registration List
                </Link>
            </div>

            <div className="main">
                <Link to="/issues-log issues" className="sub-link-3" >
                    ISSUES LOG
                </Link>
            </div>

            <div className="main">LANDING PAGE MANAGEMENT</div>
            <div className="sub-menu landing">
                <Link to="/sys-demo-vid" className="sub-link-4">
                    Manage Demo Video
                </Link>
                <Link to="/sys-review-rating" className="sub-link-5">
                    Manage Review & Rating
                </Link>
                <Link to="/sys-faq" className="sub-link-6">
                    Manage FAQ
                </Link>
            </div>
        </div>
    );
}

export default SASide;