//handles redirect logic

import { useNavigate } from "react-router-dom";

const useRedirectHandler = () => {
    const navigate = useNavigate();
    
    return (role) => {
        switch (role) {
            case "System Admin":
                navigate("/system-admin-dashboard");
                break;
            case "Business Owner":
                navigate("/bo-dashboard-view");
                break;
            case "Employee":
                navigate("/employee-dashboard");
                break;
            default:
                navigate("/login"); // Default fallback
        }
    };
};

export default useRedirectHandler;