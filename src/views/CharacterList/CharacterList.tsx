import StatusWrapper from '../../components/StatusWrapper/StatusWrapper';
import useFilterData from '../../hooks/useFilterData';
import useUpdateTitle from '../../hooks/useUpdateTitle';
import CardsList from './CardsList/CardsList';
import Filter from './Filter/Filter';

function CharacterList() {
	const { isError, isLoading, characterFilter } = useFilterData();
	useUpdateTitle({ title: 'Marvel - character list' });

	return (
		<StatusWrapper isLoading={isLoading} renderError={isError}>
			<div className='character-list'>
				<div className='character-list__filter'>
					<Filter />
				</div>
				<div className='character-list__cards'>
					<CardsList characters={characterFilter.data} />
				</div>
			</div>
		</StatusWrapper>
	);
}

export default CharacterList;
