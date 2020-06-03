import React from 'react';

import './Button.css';

// Button that can direct to internal sections or external pages, takes 3 props
// Prop 'href' is the URL or relative path to direct to
// Prop 'contents' is what is written on the button
// Prop 'openInNewTab' is a boolean value indicating whether to open in a new tab

export function Button(props) {
	
	// Check if openInNewTab is passed as true
	let newTab = null;
	if (props.openInNewTab) newTab = { target: '_blank', rel: 'noopener noreferrer',}

	return (
		<a className="btn" href={props.href} {...newTab}>{props.contents}</a>
	)
}