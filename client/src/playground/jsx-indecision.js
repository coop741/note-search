import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const app = {
	title: "Indecision App",
	subtitle: "Subtitles",
	options: [],
	count: 0
}

const onFormSubmit = (e) => {
	e.preventDefault()
	
	const option = e.target.elements.option.value
	
	if(option) {
		app.options.push(option)
		e.target.elements.option.value = ''
		renderFunction()
	}
	app.options.count = app.options.count + 1
}

const removeAll = () => {
	app.options = []
	app.options.count = 0
	renderFunction()
}

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length)
	const option = app.options[randomNum]
	alert(option)
}

const renderFunction = () => {
	const template = (
		<div>
			<h1>
				{app.title}
			</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
			<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
			<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
			<button onClick={removeAll}>Remove All</button>
			<ol>
				{app.options.map((option) => <li key={app.options.count}>{option}</li>)}
			</ol>
			<form onSubmit={onFormSubmit}>
				<input type="text" name="option" />
				<button>Add Option</button>
			</form>
		</div>
	)
	ReactDOM.render(template, document.getElementById('root'));
}

renderFunction()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
