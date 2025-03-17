import { useAuth } from '../../AuthContext';
import SASide from '../../components/SideMenu/SASide';
import UserList from '../../components/UserMgt/UserList';
import './UserMgts.css'
import "../../../public/styles/common.css"

const UserMgts = () => {
    const { user } = useAuth();

    return (
        <div className='user-management'>
            
            {/* Display side menu base on user role */}
            {user?.role === 'System Admin' && (
                <div className="side-menu">
                    <SASide />
                </div>)}

            {user?.role === 'Business Owner' && (
                <div className="side-menu">
                    Business Owner Side Menu Here
                </div>)}  
            
            <div className="user-list">
                <h1>USERS MANAGEMENT</h1>
                <UserList currentUser = {user} />
            </div>
        </div>
    );
    
}

export default UserMgts;