import { Keeb } from '../../types';
import '../../styles/Global/Global.css';
import '../../styles/collection/collection.css';

interface CollectionProps {
	Keebs: Keeb[];
}

const Collection: React.FC<CollectionProps> = ({ keebs }) => {
	console.log(keebs);
	return (
		<>
			<div className="collection">
				<div>
					<h2 className="text-center">Check out the collection!</h2>
				</div>
			</div>
		</>
	);
};

export default Collection;
