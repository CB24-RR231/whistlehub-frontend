import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<div className='navigation'>
			<Link to='/' className='logo-nav'>WhistleHub</Link>
			<nav>
				<Link to='/menu'>Laporan</Link>
				<Link to='/about'>About</Link>
				<Link to='/contact'>Contact</Link>
				<button
					type='button'
					className='sign-in-button'
				>
					Login
				</button>
			</nav>
		</div>
	);
}

export default Navigation;
