import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<div className='navigation'>
			<Link to='/' className='logo-nav'>WhistleHub</Link>
			<nav>
				<Link to='/cek-laporan'>Cek Laporan</Link>
				<Link to='/tentang-kami'>Tentang kami</Link>
				<Link to='/contact'>Contact</Link>
			</nav>
		</div>
	);
}

export default Navigation;
