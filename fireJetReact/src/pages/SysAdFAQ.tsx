import LogoNavbar from "../components/assets/LogoNavbar";
import Logout from "../components/assets/Logout";
import Row from "./SysAdFAQRow";
import "./SysAdFAQ.css";

export default function FAQ({ className = "" }: FAQProps) {
  return (
    <div className={`${className} faq-faq`}>
      <div className="faq-nav-bar-system-admin">
        <div className="faq-tt-logo-navbar-welcome-back-system-admin">
          <LogoNavbar className="faq-logo-navbar" />
          <div className="faq-welcome-back-system-admin">
            Welcome Back, System Admin
          </div>
        </div>
        <Logout className="faq-logout" />
      </div>
      <div className="faq-t-side-menu-tttttfilter-review-delete-table">
        <div className="faq-side-menu">
          <div>USER</div>
          <div>ISSUES LOG</div>
          <div className="faq-landing-page-management">
            <p>LANDING PAGE MANAGEMENT</p>
          </div>
        </div>
        <div className="faq-tttt-filter-review-delete-table">
          <div className="faq-ttt-filter-review-delete">
            <div className="faq-tt-filter-review-delete">
              <div className="faq-t-filter-review-delete">
                <div className="faq-filter-review">
                  <div className="faq-label-text">Add FAQ</div>
                </div>
                <div className="faq-delete">
                  <div className="faq-label-text-1">Delete FAQ</div>
                </div>
              </div>
            </div>
          </div>
          <div className="faq-table">
            <Row
              container1="faq-row-0-type"
              text="FAQs"
              container2="faq-row-2-type"
              text1="Answer"
             />
            <Row
              container1="faq-row-1-0-type"
              text="What email do I contact?"
              container2="faq-row-1-2-type"
              text1="EmployeeRoster@gmail.com"
             />
            <Row
              container1="faq-row-2-0-type"
              text="What is the number for customer service?"
              container2="faq-row-2-2-type"
              text1="+65 67485732"
             />
            <Row
              container1="faq-row-3-0-type"
              text="Can I get a refund after subscribing?"
              container2="faq-row-3-2-type"
              text1="Unfortunately, all payments are non-refundable"
             />
            <div className="faq-row-4">
              <div className="faq-cell" />
              <div className="faq-cell-1" />
              <div className="faq-checkboxes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface FAQProps {
  className?: string;
}
