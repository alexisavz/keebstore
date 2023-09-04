import React, { useState, useEffect } from 'react';
import '../../styles/carousel/carousel.css';
import { Keeb } from '../../types';
import { Link } from 'react-router-dom';

interface CarouselProps {
	keeb: Keeb;
}

const Carousel: React.FC<CarouselProps> = ({ keeb }) => {
	const [keebImg, setKeebImg] = useState(null);

	useEffect(() => {
		import(`../../assets/${keeb.images[0]}.png`)
			.then((image) => {
				setKeebImg(image.default);
			})
			.catch((error) => {
				console.error('Error Loading Image: ', error);
			});
	});

	return (
		<>
			<div className="container">
				<h2 className="carousel title">Featured Keyboard</h2>
				<div className="carousel content">
					<div className="carousel imageCont">
						<img className="carousel image" src={keebImg} alt="" />
					</div>
					<div className="carousel left-container">
						<div>
							<h3 className="carousel subtitle">{keeb.name}</h3>
						</div>
						<div>
							<p className="carousel brand">By: {keeb.brand}</p>
						</div>
						<div>
							<Link to={`/keebs/${keeb.id}`} className="carousel button">
								Check out!
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Carousel;
