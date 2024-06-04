import { Link } from 'react-router-dom';

function Navigation() {
	return (
		<div className='navigation'>
			<Link to='/' className='logo-nav'>WhistleHub</Link>
			<nav>
				<Link to='#'>Pages 1</Link>
				<button
					type='button'
					className='sign-in-button'
				>
					Sign in
				</button>
			</nav>
		</div>
	);
}

export default Navigation;
