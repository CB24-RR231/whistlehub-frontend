import FooterDetails from "./FooterDetails";
import DomainIcon from '@mui/icons-material/Domain';

function Footer() {

  return (
    <footer className="footer">
      <div className="copyright">
        <p>&copy; 2024 - WhistleHub. All rights reserved.</p>
        <p>
          <DomainIcon /> Indonesia
        </p>
      </div>
      <hr></hr>
      <FooterDetails />
    </footer>
  )
}

export default Footer;