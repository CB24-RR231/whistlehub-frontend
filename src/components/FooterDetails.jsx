import { Link } from 'react-router-dom';

function FooterDetails() {
  return (
    <div className="footer-upper">
      <div className="details-footer">
        <p>Dikembangkan oleh: </p>
        <p>WhistleHub Team</p>
      </div>
      <div className="details-footer">
        <p>Kontak kami:</p>
        <p>
          CB24-RR231@dicoding.org
        </p>
      </div>
      <div className="details-footer">
        <p>Ikuti kami di:</p>
        <Link to='https://www.dicoding.com/'>Dicoding</Link>
      </div>
    </div>
  )
}

export default FooterDetails;