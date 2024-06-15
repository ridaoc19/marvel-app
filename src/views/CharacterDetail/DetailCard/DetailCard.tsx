function DetailCard({ image, title, modified }: Omit<Comic, 'id'>) {
	return (
		<div className='detail-card'>
			<div className='detail-card__image'>
				<img src={image} alt={title} />
			</div>
			<div className='detail-card__info'>
				<h4>{title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}</h4>
				<p>{new Date(modified).getFullYear()}</p>
			</div>
		</div>
	);
}

export default DetailCard;
