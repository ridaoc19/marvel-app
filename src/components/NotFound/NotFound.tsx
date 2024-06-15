import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CreateContext } from '../../hooks/useContext';
import { TypeReducer } from '../../hooks/useContext/reducer';
import Button from '../button/Button';
import { ButtonType } from '../button/button.type';
import Svg from '../icons/Svg';
import { SvgType } from '../icons/svgType';

const NotFound = () => {
	const { marvelDispatch } = useContext(CreateContext);
	const navigate = useNavigate();

	const handleClick = () => {
		marvelDispatch({ type: TypeReducer.CLEAR });
		navigate('/');
	};

	return (
		<div className='not-found'>
			<div className='not-found' data-testid='not-found-logo'>
				<Link to={'/'}>
					<Svg type={SvgType.Logo} width={60} height={60} />
				</Link>
			</div>
			<h1 className='not-found__title'>404 - Page Not Found</h1>
			<p className='not-found__message'>
				We're sorry, the page you requested is unavailable.
			</p>
			<Button
				id='not-found__button'
				className='not-found__button'
				text='home'
				type={ButtonType.Light}
				handleClick={() => handleClick()}
			/>
		</div>
	);
};

export default NotFound;
