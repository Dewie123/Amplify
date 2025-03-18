import "./UserDetail.css";

export default function UserDetail({ className = "" }: UserDetailProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="20" fill="white"/>
      <path d="M12.4998 9.16667H18.3332V10.8333H12.4998V9.16667ZM13.3332 12.5H18.3332V14.1667H13.3332V12.5ZM11.6665 5.83334H18.3332V7.50001H11.6665V5.83334ZM3.33317 15.8333H11.6665V15C11.6665 12.7025 9.79734 10.8333 7.49984 10.8333H5.83317C3.53567 10.8333 1.6665 12.7025 1.6665 15V15.8333H3.33317ZM6.6665 10C8.329 10 9.58317 8.74584 9.58317 7.08334C9.58317 5.42084 8.329 4.16667 6.6665 4.16667C5.004 4.16667 3.74984 5.42084 3.74984 7.08334C3.74984 8.74584 5.004 10 6.6665 10Z" fill="#8852E0"/>
      </svg>
      
    </div>
  );
}

interface UserDetailProps {
  className?: string;
}
