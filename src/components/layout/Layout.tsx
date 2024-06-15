import { ReactNode, useContext } from 'react';
import Navbar from './Navbar/Navbar';
import { CreateContext } from '../../hooks/useContext';

function Layout({ children }: { children: ReactNode }) {
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
			{type === 'favorites' && (
				<div className='layout__favorites'>
					<h2>FAVORITES</h2>
				</div>
			)}
			<div className='layout__children' data-testid='layout-children'>
				{children}
			</div>
		</div>
	);
}

export default Layout;
