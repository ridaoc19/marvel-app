import { Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import NotFound from './components/NotFound/NotFound';
import './styles/app/app.scss';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';
import CharacterList from './views/CharacterList/CharacterList';

function App() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<Layout>
						<CharacterList />
					</Layout>
				}
			/>
			<Route
				path='/character/:characterId'
				element={
					<Layout>
						<CharacterDetail />
					</Layout>
				}
			/>
			<Route path='*' element={<NotFound />} />
		</Routes>
	);
}

export default App;
