import "./Upload.css";

export default function Upload({ className = "" }: UploadProps) {
  return (
    <div className={`${className}`}>
      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 23.87 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.4118 16V7.85L8.82569 10.45L7.43318 9L12.4064 4L17.3797 9L15.9872 10.45L13.4011 7.85V16H11.4118ZM6.43852 20C5.89146 20 5.42315 19.8042 5.03358 19.4125C4.644 19.0208 4.44922 18.55 4.44922 18V15H6.43852V18H18.3744V15H20.3637V18C20.3637 18.55 20.1689 19.0208 19.7793 19.4125C19.3897 19.8042 18.9214 20 18.3744 20H6.43852Z" fill="#1D1B20"/>
      </svg>
      
    </div>
  );
}

interface UploadProps {
  className?: string;
}
