import { useParams } from 'react-router-dom';

const Keeb = () => {
	const { id } = useParams();

	return (
		<>
			<div>
				<h1>this is the {id}</h1>
			</div>
		</>
	);
};

export default Keeb;
