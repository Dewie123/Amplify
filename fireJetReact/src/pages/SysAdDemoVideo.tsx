import LogoNavbar from "../components/assets/LogoNavbar";
import Logout from "../components/assets/Logout";
import DeleteLogo from "../components/assets/DeleteLogo";
import Check_small from "../components/assets/Check_small2";
import DeleteLogo1 from "../components/assets/DeleteLogo1";
import DeleteLogo2 from "../components/assets/DeleteLogo2";
import DeleteLogo3 from "../components/assets/DeleteLogo3";
import DeleteLogo4 from "../components/assets/DeleteLogo4";
import "./SysAdDemoVideo.css";
import AccountLogout from './AccountLogout';
import SysAdminSideMenu from './SysAdminSideMenu';

export default function DemoVideo({ className = "" }: DemoVideoProps) {
  return (
    <div className={`${className} demo-video-demo-video`}>
      <div className="demo-video-nav-bar-system-admin">
        <div className="demo-video-tt-logo-navbar-welcome-back-system-admin">
          <LogoNavbar className="demo-video-logo-navbar" />
          <div className="demo-video-welcome-back-system-admin">
            Welcome Back, System Admin
          </div>
        </div>
        <AccountLogout className="demo-video-logout" />
      </div>

      <div className="demo-video-t-side-menu-tttpreview-rectangle-12tttvideos-to-be-played-tprimary-button-list" >
        <div className="demo-video-side-menu">
            <SysAdminSideMenu />
        </div>
        </div>
        <div className="demo-video-tt-preview-rectangle-12tttvideos-to-be-played-tprimary-button-list" >
          <div className="demo-video-t-preview-rectangle">
            <div className="demo-video-preview">
              <p>Preview</p>
            </div>
            <div className="demo-video-rectangle">
              <div className="demo-video-t-symbol-label">
                <div>􀊄</div>
                <div>Play</div>
              </div>
            </div>
          </div>
          <div className="demo-video-ttt-videos-to-be-played-tprimary-button-list" >
            <div className="demo-video-tt-videos-to-be-played-tprimary-button-list" >
              <div className="demo-video-t-videos-to-be-played-tprimary-button" >
                <div className="demo-video-t-primary-button">
                  <button  className="demo-video-primary-button">
                    <div className="demo-video-t-text">
                      <div className="demo-video-text">
                        Select Video to Upload
                      </div>
                    </div>
                  </button>
                </div>
                <div className="demo-video-videos-to-be-played">
                  <p>Videos to be played</p>
                </div>
              </div>
              <div className="demo-video-list">
                <div className="demo-video-tttt-headline-tdelete-logo-container-ttheadline-tdelete-logo-container-ttheadline-tdelete-logo-container-ttheadline-tdelete-logo-container-ttheadline-tdelete-logo-container" >
                  <div className="demo-video-ttt-headline-tdelete-logo-container-ttheadline-tdelete-logo-container-ttheadline-tdelete-logo-container-ttheadline-tdelete-logo-container-ttheadline-tdelete-logo-container" >
                    <div className="demo-video-tt-headline-tdelete-logo-container" >
                      <div className="demo-video-t-headline-tdelete-logo">
                        <div className="demo-video-headline">
                          Video1.mp4
                        </div>
                        <div className="demo-video-t-delete-logo">
                          <DeleteLogo className="demo-video-delete-logo" />
                        </div>
                      </div>
                      <div className="demo-video-container">
                        <Check_small className="demo-video-check_small" />
                      </div>
                    </div>
                    <div className="demo-video-tt-headline-tdelete-logo-container-1" >
                      <div className="demo-video-t-headline-tdelete-logo-1">
                        <div className="demo-video-headline-1">
                          Video2.mp4
                        </div>
                        <div className="demo-video-t-delete-logo-1">
                          <DeleteLogo1 className="demo-video-delete-logo-1" />
                        </div>
                      </div>
                      <div className="demo-video-container-1">
                        <Check_small className="demo-video-check_small-1" />
                      </div>
                    </div>
                    <div className="demo-video-tt-headline-tdelete-logo-container-2" >
                      <div className="demo-video-t-headline-tdelete-logo-2">
                        <div className="demo-video-headline-2">
                          Video3.mp4
                        </div>
                        <div className="demo-video-t-delete-logo-2">
                          <DeleteLogo2 className="demo-video-delete-logo-2" />
                        </div>
                      </div>
                      <div className="demo-video-container-2">
                        <Check_small className="demo-video-check_small-2" />
                      </div>
                    </div>
                    <div className="demo-video-tt-headline-tdelete-logo-container-3" >
                      <div className="demo-video-t-headline-tdelete-logo-3">
                        <div className="demo-video-headline-3">
                          Video4.mp4
                        </div>
                        <div className="demo-video-t-delete-logo-3">
                          <DeleteLogo3 className="demo-video-delete-logo-3" />
                        </div>
                      </div>
                      <div className="demo-video-container-3">
                        <Check_small className="demo-video-check_small-3" />
                      </div>
                    </div>
                    <div className="demo-video-tt-headline-tdelete-logo-container-4" >
                      <div className="demo-video-t-headline-tdelete-logo-4">
                        <div className="demo-video-headline-4">
                          Video5.mp4
                        </div>
                        <div className="demo-video-t-delete-logo-4">
                          <DeleteLogo4 className="demo-video-delete-logo-4" />
                        </div>
                      </div>
                      <div className="demo-video-container-4">
                        <Check_small className="demo-video-check_small-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

interface DemoVideoProps {
  className?: string;
}
