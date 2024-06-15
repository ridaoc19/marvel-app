import React from 'react';
import Button from '../../components/button/Button';
import { ButtonType } from '../../components/button/button.type';
import Svg from '../../components/icons/Svg';
import { SvgType } from '../../components/icons/svgType';

interface SwitchProps {
	handleClick: () => void;
	language: string;
}

const Switch: React.FC<SwitchProps> = ({ handleClick, language }) => {
	return (
		<label className='switch'>
			<Button
				id='spanish'
				type={language === 'es' ? ButtonType.Dark : ButtonType.Light}
				handleClick={handleClick}
				text={Svg({ type: SvgType.Spanish })}
			/>
			<Button
				id='english'
				type={language === 'en' ? ButtonType.Dark : ButtonType.Light}
				handleClick={handleClick}
				text={Svg({ type: SvgType.English })}
			/>
		</label>
	);
};

export default Switch;
