import React, { useState } from 'react';
import Editor from './components/Editor';
import './index.css';
import Header from './components/Header';

function App() {
	const [html, setHtml] = useState('');
	const [css, setCss] = useState('');
	const [js, setJs] = useState('');

	return (
		<>
			<Header/>
			{/* <p className='text-center fs-5'>Online Code Editor</p> */}
			<div className="pane top-pane">
				<Editor language="xml" displayName="HTML" value={html} onChange={setHtml} displayIcon="fa-brands fa-html5 col-6 ps-3"/>
				<Editor language="css" displayName="CSS" value={css} onChange={setCss} displayIcon="fa-brands fa-css3-alt col-6 ps-3"/>
				<Editor language="javascript" displayName="JS" value={js} onChange={setJs} displayIcon="fa-brands fa-js col-6 ps-3"/>
			</div>
			<div className="pane bottom-pane">
				<iframe srcDoc={`<html><body>${html}</body><style>${css}</style><script>${js}</script></html>`} title="output" sandbox="allow-scripts" frameBorder="0" />
			</div>		
		</>
	);
}

export default App;
