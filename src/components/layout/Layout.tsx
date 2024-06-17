import { ReactNode, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CreateContext } from '../../hooks/useContext';
import Navbar from './Navbar/Navbar';

function Layout({ children }: { children: ReactNode }) {
	const { pathname } = useLocation();

	const {
		marvelState: {
			characterFilter: { type },
		},
	} = useContext(CreateContext);
	return (
		<div className={`layout ${type === 'favorites' ? 'favorites' : ''}`} data-testid='layout'>
			<div className='layout__navbar'>
				<Navbar />
			</div>
			<div className='layout__favorites'>
				{type === 'favorites' && pathname === '/' && <h2>FAVORITES</h2>}
			</div>
			{children && (
				<div className='layout__children' data-testid='layout-children'>
					{children}
				</div>
			)}
		</div>
	);
}

export default Layout;
