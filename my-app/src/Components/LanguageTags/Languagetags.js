import React from 'react';
import scss from "./Languagetags.scss"

export default function Languagetags(props) {
	return (
		<div className="Languagetags">
			{props.items.map((item, index) => (
				<div className='tag' key={index}>#{item}</div>
			))}
		</div>
	);
}
