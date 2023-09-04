import keyboardsData from '../public/Keebs/keebs.json';
import Carousel from '../components/Carousel/Carousel';
import '../styles/Global/Global.css';
import Collection from '../components/Collection/Collection';

const Homepage = () => {
	return (
		<>
			<div className="content">
				<div>
					<Carousel keeb={keyboardsData[0]} />
				</div>
				<div>
					<Collection keebs={keyboardsData} />
				</div>
			</div>
		</>
	);
};

export default Homepage;
