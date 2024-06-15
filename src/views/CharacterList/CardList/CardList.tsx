import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Svg from '../../../components/icons/Svg';
import { SvgType } from '../../../components/icons/svgType';
import { CreateContext } from '../../../hooks/useContext';

function CardList({ id, image, name, favorite }: Omit<Character, 'description'>) {
	const { toggleFavoriteCharacter } = useContext(CreateContext);
	const [mouseEnter, setMouseEnter] = useState(false);

	return (
		<Link
			to={`/character/${id}`}
			className='card-list'
			onMouseEnter={() => setMouseEnter(true)}
			onMouseLeave={() => setMouseEnter(false)}
		>
			<div className='card-list__image'>
				<img src={image} alt={name} />
			</div>
			<div className='card-list__rectangle'></div>
			<div className='card-list__info'>
				<p>{name.toLocaleUpperCase()}</p>
				<button
					onClick={e => {
						e.preventDefault();
						e.stopPropagation();
						toggleFavoriteCharacter(id, '/');
					}}
					style={{
						background: 'none',
						border: 'none',
						padding: 0,
						cursor: 'pointer',
					}}
				>
					<Svg
						type={
							!favorite
								? SvgType.Favorites_black
								: mouseEnter
									? SvgType.Favorites_white
									: SvgType.Favorites_red
						}
					/>
				</button>
			</div>
			<div className='card-list__cut'></div>
		</Link>
	);
}

export default CardList;
