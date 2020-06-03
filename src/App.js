import React, { useState , useEffect } from 'react';
import './App.css';
import { Button , Typewriter } from './components';

export function App() {
	
	const [article, setArticle] = useState(null);
	
	function fetchAPI(path, params) {
		let paramsArray = [];
		for (const [k,v] of Object.entries(params)) {
			paramsArray.push(`${k}=${v}`)
		}
		return fetch(`${path}${paramsArray.join('&')}`)
	}

	useEffect(() => {

		const WikipediaAPIParameters = {
			action : 'query',
			explaintext : '0',
			exsentences : '1',
			exlimit : '1',
			format : 'json',
			formatversion : '2',
			generator : 'random',
			grnnamespace : '0',
			origin : '*',
			prop : 'extracts',
		}

		fetchAPI('https://en.wikipedia.org/w/api.php?', WikipediaAPIParameters)
		.then(res => res.json())
		.then((data) => {
			setArticle({
				pageid : data.query.pages[0].pageid,
				url : `https://en.wikipedia.org/wiki/?curid=${data.query.pages[0].pageid}`,
				title : data.query.pages[0].title,
				extract : data.query.pages[0].extract,
				date : new Date().toLocaleString(),
			});
		});
	},[]);

	return (
		<div className="v-flex align-items-center">
			<div className="p-3">
				<Typewriter article={article} />
			</div>
			<div className="h-flex font-md p-3">
				<div className="px-3">
					<Button contents="👍 Yes!" href=""/>
				</div>
				<div className="px-3">
					<Button contents="👎 Nope." href=""/>
				</div>
			</div>
		</div>
	)
}