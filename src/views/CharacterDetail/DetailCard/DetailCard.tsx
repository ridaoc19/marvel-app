function DetailCard({ image, title, modified }: Omit<Comic, 'id'>) {
	return (
		<div className='detail-card' data-testid='detail-card'>
			<div className='detail-card__image'>
				<img src={image} alt={title} />
			</div>
			<div className='detail-card__info'>
				<h4>{title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}</h4>
				<p>{modified || ''}</p>
			</div>
		</div>
	);
}

export default DetailCard;
