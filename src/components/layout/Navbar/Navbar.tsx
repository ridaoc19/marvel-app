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
				<Svg type={SvgType.Logo} />
			</Link>
			<div
				className='navbar__favorites'
				onClick={() => {
					charactersFilter({ type: 'favorites', search: !favorite });
					setFavorite(!favorite);
				}}
			>
				<Svg
					type={
						character.length === characterFilter.data.length || characterFilter.type !== 'favorites'
							? SvgType.Favorites_white_size
							: favorite
								? SvgType.Favorites
								: SvgType.Favorites_black_size
					}
				/>
				<p>{totalFavorites}</p>
			</div>
		</div>
	);
}

export default Navbar;
