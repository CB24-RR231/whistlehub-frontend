import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<div className='navigation'>
			<Link to='/' className='logo-nav'>WhistleHub</Link>
			<nav>
				<Link to='/cek-laporan'>Cek Laporan</Link>
				<Link to='/tentang-kami'>Tentang kami</Link>
			</nav>
		</div>
	);
}

export default Navigation;
