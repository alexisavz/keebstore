import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Home';
import Keebs from './pages/Keebs';
import Comps from './pages/Comps';
import KnowHow from './pages/KnowHow';
import Header from './components/Header/Header';
import Keeb from './pages/Keeb';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/keebs" element={<Keebs />} />
				<Route path="/comps" element={<Comps />} />
				<Route path="/know-how" element={<KnowHow />} />
				<Route path="/keebs/:id" element={<Keeb />} />
			</Routes>
		</>
	);
}

export default App;
