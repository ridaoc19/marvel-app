import { ReactNode } from 'react';
import Loading from '../Loading/Loading';
import NotFound from '../NotFound/NotFound';

interface StatusWrapperProps {
	children: ReactNode;
	isLoading: boolean;
	renderError: boolean;
}

function StatusWrapper({
	children,
	isLoading,
	renderError,
}: StatusWrapperProps) {
	return (
		<div className='status-wrapper' data-testid='status-wrapper'>
			{isLoading ? <Loading /> : renderError ? <NotFound /> : children}
		</div>
	);
}

export default StatusWrapper;
