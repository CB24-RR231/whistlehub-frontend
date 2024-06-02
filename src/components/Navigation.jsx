import { Link } from 'react-router-dom';
// import Button from '@mui/material/Button';
// import logo from '../assets/logo-white.png';

function Navigation() {
	return (
		<div className='navigation'>
			<Link to='/' className='logo-nav'>WhistleHub</Link>
			<nav>
				<Link to='#'>Pages1</Link>
				{/* <Button variant="outlined" className='sign-in-button'>Sign in</Button> */}
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
