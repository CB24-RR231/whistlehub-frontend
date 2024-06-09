import FooterDetails from "./FooterDetails";
import DomainIcon from '@mui/icons-material/Domain';

function Footer() {

  return (
    <footer className="footer">
      <div className="copyright">
        <FooterDetails />
        <hr></hr>
        <div className="domain">
          <DomainIcon />
          <p>Di Indonesia</p>
        </div>
        <p>&copy; 2024 - WhistleHub. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer;