import StatusWrapper from '../../components/StatusWrapper/StatusWrapper';
import useFilterData from '../../hooks/useFilterData';
import DetailCards from './DetailCards/DetailCards';
import DetailResume from './DetailResume/DetailResume';

function CharacterDetail() {
	const {
		comics: { comics, name, image, favorite, description, id },
		isError,
		isLoading,
	} = useFilterData();
	return (
		<StatusWrapper isLoading={isLoading} renderError={isError}>
			<div className='character-detail'>
				<div className='character-detail__resume'>
					<DetailResume
						id={id}
						name={name}
						image={image}
						favorite={favorite}
						description={description}
					/>
				</div>
				<div className='character-detail__comics'>
					<DetailCards comics={comics} />
				</div>
			</div>
		</StatusWrapper>
	);
}

export default CharacterDetail;
