import FooterDetails from "./FooterDetails";
import DomainIcon from '@mui/icons-material/Domain';

function Footer() {

  return (
    <footer className="footer">
      <div className="copyright">
        <FooterDetails />
        <hr></hr>
        <p>
          <DomainIcon />Based on Indonesia
        </p>
        <p>&copy; 2024 - WhistleHub. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;