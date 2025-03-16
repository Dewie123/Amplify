import LogoNavbar from "../components/assets/LogoNavbar";
import Logout from "../components/assets/Logout";
import Row from "./ReviewRatingRow";
import "./SysAdReviewAndRating.css";

export default function ReviewAndRating({
  className = "",
}: ReviewAndRatingProps) {
  return (
    <div className={`${className} review-and-rating-review-and-rating`}>
      <div className="review-and-rating-nav-bar-system-admin">
        <div className="review-and-rating-tt-logo-navbar-welcome-back-system-admin" >
          <LogoNavbar className="review-and-rating-logo-navbar" />
          <div className="review-and-rating-welcome-back-system-admin">
            Welcome Back, System Admin
          </div>
        </div>
        <Logout className="review-and-rating-logout" />
      </div>
      <div className="review-and-rating-t-side-menu-ttttfilter-review-filter-ratings-table" >
        <div className="review-and-rating-side-menu">
          <div>USER</div>
          <div>ISSUES LOG</div>
          <div className="review-and-rating-landing-page-management">
            <p>LANDING PAGE MANAGEMENT</p>
          </div>
        </div>
        <div className="review-and-rating-tttt-filter-review-filter-ratings-table" >
          <div className="review-and-rating-ttt-filter-review-filter-ratings-table" >
            <div className="review-and-rating-tt-filter-review-filter-ratings" >
              <div className="review-and-rating-t-filter-review-filter-ratings" >
                <div className="review-and-rating-filter-review">
                  <div className="review-and-rating-label-text">
                    Filter Reviews
                  </div>
                </div>
                <div className="review-and-rating-filter-ratings">
                  <div className="review-and-rating-label-text-1">
                    Filter Ratings
                  </div>
                </div>
              </div>
            </div>
            <div className="review-and-rating-table">
              <Row
                container1="review-and-rating-row-0-type"
                text="Date"
                container2="review-and-rating-row-2-type"
                text1="Review"
                container3="review-and-rating-row-4-type"
                text2="Rating"
               />
              <Row
                container1="review-and-rating-row-1-0-type"
                text="12/12/2024"
                container2="review-and-rating-row-1-2-type"
                text1="Best I have used!"
                container3="review-and-rating-row-1-4-type"
                text2="10/10"
               />
              <Row
                container1="review-and-rating-row-2-0-type"
                text="06/11/2024"
                container2="review-and-rating-row-2-2-type"
                text1="Very Useful!"
                container3="review-and-rating-row-2-4-type"
                text2="7/10"
               />
              <Row
                container1="review-and-rating-row-3-0-type"
                text="02/10/2024"
                container2="review-and-rating-row-3-2-type"
                text1="It’s okay..."
                container3="review-and-rating-row-3-4-type"
                text2="5/10"
               />
              <Row
                container1="review-and-rating-row-4-0-type"
                text="28/09/2024"
                container2="review-and-rating-row-4-2-type"
                text1="Telling the world abt this!"
                container3="review-and-rating-row-4-4-type"
                text2="9/10"
               />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ReviewAndRatingProps {
  className?: string;
}
