import DetailCard from '../DetailCard/DetailCard';

function DetailCards({ comics }: { comics: ComicDetail['comics'] }) {
	return (
		<div className='detail-cards' data-testid='detail-cards'>
			<div className='detail-cards__title'>
				<h2>COMICS</h2>
			</div>
			<div className='detail-cards__cards' data-testid='main-cards'>
				{comics?.map(({ id, ...rest }) => <DetailCard key={id} {...rest} />)}
			</div>
		</div>
	);
}

export default DetailCards;
