import { Link } from 'react-router-dom';
import Svg from '../../icons/Svg';
import { SvgType } from '../../icons/svgType';
import useFilterData from '../../../hooks/useFilterData';
import { useContext, useState } from 'react';
import { CreateContext } from '../../../hooks/useContext';

function Navbar() {
	const { totalFavorites } = useFilterData();
	const {
		charactersFilter,
		marvelState: { character, characterFilter },
	} = useContext(CreateContext);
	const [favorite, setFavorite] = useState(false);

	return (
		<div className='navbar'>
			<Link
				className='navbar__logo'
				to={'/'}
				onClick={() => {
					charactersFilter({ type: 'all' });
					setFavorite(!favorite);
				}}
			>
				<div data-testid='svg-logo'>
					<Svg type={SvgType.Logo} />
				</div>
			</Link>
			<Link
				className='navbar__favorites'
				to={'/'}
				onClick={() => {
					charactersFilter({ type: 'favorites', search: !favorite });
					setFavorite(!favorite);
				}}
			>
				<div data-testid='svg-favorites'>
					<Svg
						type={
							character.length === characterFilter.data.length ||
							characterFilter.type !== 'favorites'
								? SvgType.Favorites_white_size
								: favorite
									? SvgType.Favorites
									: SvgType.Favorites_black_size
						}
					/>
				</div>
				<p>{totalFavorites}</p>
			</Link>
		</div>
	);
}

export default Navbar;
