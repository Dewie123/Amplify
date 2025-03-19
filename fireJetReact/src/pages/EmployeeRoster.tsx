import React from 'react';
import './EmployeeRoster.css';

const EmpRoster = () => {
    return (
        <div className="container">
            {/* Section 1 */}
            <header className="header">
                <nav className="navbar">
                    <div className="logo">EmployeeRoster</div>
                    <div className="nav-links">
                        <a href="#">Products</a>
                        <a href="#">Solutions</a>
                        <a href="#">Resources</a>
                        <a href="#">Pricing</a>
                        <a href="#">Contact</a>
                        <button className="register-btn">Register</button>
                    </div>
                </nav>

                <h1>EmpRoster</h1>
                <p className="subtitle">Simplify Employee Scheduling and Timesheets</p>
                <p>Discover how EmpRoster can streamline your employee scheduling process...</p>

                <div className="features">
                    <div className="feature-item">
                        <img src="/path/to/time-management-icon.png" alt="Time Management" className="icon"/>
                        <h3><b>Efficient Scheduling</b></h3>
                        <p>Easily manage employee shifts...</p>
                    </div>
                    <div className="feature-item">
                        <img src="/path/to/communication-icon.png" alt="Communication Icon" className="icon"/>
                        <h3><b>Seamless Collaboration</b></h3>
                        <p>Facilitate seamless communication...</p>
                    </div>
                    <div className="feature-item">
                        <img src="/path/to/productivity-icon.png" alt="Productivity Icon" className="icon"/>
                        <h3><b>Boost Efficiency</b></h3>
                        <p>Maximize productivity with EmployeeRoster...</p>
                    </div>
                </div>

                <div className="video-section">
                    <img src="/path/to/video-placeholder.png" alt="Video Thumbnail" className="video-placeholder"/>
                </div>
            </header>

            {/* Section 2 */}
            <div className="plans">
                <h2>
                    <img src="/path/to/calendar-icon.png" alt="Calendar Icon" className="icon"/>
                    <b>Subscription Plans</b>
                </h2>
                <div className="plan-options">
                    <div className="plan">Starter Plan - <i>For Small Teams</i><br/>Up to 10 users</div>
                    <div className="plan">Business Plan - <i>For Growing Teams</i><br/>Up to 50 users</div>
                    <div className="plan">Business Plan - <i>For Growing Teams</i><br/>Up to 50 users</div>
                </div>
            </div>
        </div>
    );
}

export default EmpRoster;
