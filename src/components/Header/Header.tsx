import { Link } from 'react-router-dom';
import '../../styles/Header/Header.css';

const Header = () => {
	return (
		<>
			<nav className="nav">
				<Link className="nav link" to="/">
					Home
				</Link>
				<Link className="nav link" to="/keebs">
					Keebs
				</Link>
				<Link className="nav link" to="/comps">
					Comps
				</Link>
				<Link className="nav link" to="/know-how">
					Know How
				</Link>
			</nav>
		</>
	);
};

export default Header;
