import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<div className='navigation'>
			<Link to='/' className='logo-nav'>WhistleHub</Link>
			<nav>
<<<<<<< HEAD
				<Link to='#'>Pages 1</Link>
=======
				<Link to='/menu'>Laporan</Link>
				<Link to='/about'>About</Link>
				<Link to='/contact'>Contact</Link>
>>>>>>> a8e0001d443176b4d461f6296f905e3528f3b53b
				<button
					type='button'
					className='sign-in-button'
				>
<<<<<<< HEAD
					Sign in
=======
					Login
>>>>>>> a8e0001d443176b4d461f6296f905e3528f3b53b
				</button>
			</nav>
		</div>
	);
}

export default Navigation;
