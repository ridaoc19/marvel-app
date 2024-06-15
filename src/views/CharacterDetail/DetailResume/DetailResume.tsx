import { useContext } from 'react';
import Svg from '../../../components/icons/Svg';
import { SvgType } from '../../../components/icons/svgType';
import { CreateContext } from '../../../hooks/useContext';

function DetailResume({ id, name, description, favorite, image }: Omit<ComicDetail, 'comics'>) {
	const { toggleFavoriteCharacter } = useContext(CreateContext);
	return (
		<div className='detail-resume'>
			<div className='detail-resume__image'>
				<img src={image} alt={name} />
			</div>
			<div className='detail-resume__description'>
				<div>
					<div className='detail-resume__description-title'>
						<h1>{name}</h1>
						<div onClick={() => toggleFavoriteCharacter(id, 'resume')}>
							<Svg type={favorite ? SvgType.Favorites : SvgType.Favorites_black_size} />
						</div>
					</div>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
}

export default DetailResume;
