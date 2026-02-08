import "./Footer.css";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
export default function Footer() {
  return (
    <footer className="footer">
      <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"200px"}} className="footer-content">
        <p className="footer-item">
          <span className="icon"><PhoneAndroidIcon/></span>
          <span className="text">0785090661</span>
        </p>
        <p className="footer-item">
          <span className="icon"><MailOutlineIcon/></span>
          <a href="mailto:aymzah11@gmail.com" className="text-link">aymzah11@gmail.com</a>
        </p>
        <p className="footer-item">
          <span className="icon">📄</span>
          <a
            href="https://drive.google.com/file/d/1NXHKqRyYgSlIIE5Kex4CG2zd2UUoz1NF/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            My CV
          </a>
        </p>
      </div>
    </footer>
  );
}
