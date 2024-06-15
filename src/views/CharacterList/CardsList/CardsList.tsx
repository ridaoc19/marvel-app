import CardList from '../CardList/CardList';

function CardsList({ characters }: { characters: Character[] }) {
	if (characters.length === 0) return null;
	return (
		<ul className='cards-list' data-testid='main-cards'>
			{characters?.map(character => <CardList key={character.id} {...character} />)}
		</ul>
	);
}

export default CardsList;
