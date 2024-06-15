import { useContext, useEffect, useRef, useState } from 'react';
import Svg from '../../../components/icons/Svg';
import { SvgType } from '../../../components/icons/svgType';
import { CreateContext } from '../../../hooks/useContext';

function Filter() {
	const {
		charactersFilter,
		marvelState: { character, characterFilter },
	} = useContext(CreateContext);
	const inputRef = useRef<HTMLInputElement>(null);
	const [filter, setFilter] = useState('');

	useEffect(() => {
		if (character.length === characterFilter.data.length) {
			setFilter('');
			if (inputRef.current) {
				inputRef.current.value = '';
			}
		}
	}, [character.length, characterFilter.data.length]);

	return (
		<div className='filter'>
			<div className='filter__input'>
				<Svg type={SvgType.Search} />
				<input
					ref={inputRef}
					type='text'
					placeholder='SEARCH A CHARACTER...'
					value={filter}
					onChange={event => {
						charactersFilter({ type: 'filter', search: event.target.value });
						setFilter(event.target.value);
					}}
					className='podcast-list__filter'
				/>
			</div>
			<div className='filter__count'>
				<p>{characterFilter.data.length} RESULTS</p>
			</div>
		</div>
	);
}

export default Filter;
