import React from 'react';

export function Typewriter(props) {
	const article = props.article ? props.article : {};

	return (
		<div className="v-flex align-items-center text-center font-md">
			<a className="font-bold link pb-2" href={article.url} target="_black" rel="noopener noreferrer">
				{article.title}
			</a>
			<div>
				{article.extract}
			</div>
		</div>
	)
}