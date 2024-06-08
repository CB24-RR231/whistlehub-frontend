import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<div className='navigation'>
			<Link to='/' className='logo-nav'>WhistleHub</Link>
			<nav>
				<Link to='/menu'>Laporan</Link>
				<Link to='/about'>About</Link>
				<Link to='/contact'>Contact</Link>
			</nav>
		</div>
	);
}

export default Navigation;
