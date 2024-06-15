import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { StoreContext } from './hooks/useContext';
import './styles/index/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<StoreContext>
				<App />
			</StoreContext>
		</BrowserRouter>
	</React.StrictMode>,
);
