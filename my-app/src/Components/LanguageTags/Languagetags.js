import React from 'react';
import "./Languagetags.scss"

export default function Languagetags(props) {
	return (
		<div className="Languagetags">
			{props.items.map((item, index) => (
				<div className='tag' key={index}>#{item}</div>
			))}
		</div>
	);
}
