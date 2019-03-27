// H1 header with text Visibility Toggle
// button that displays show details, hide details
// when shown, render text like 'Hey. These are some details you can now see!'
import React from 'react';
import ReactDOM from 'react-dom';

let click = false

const showDetails = () => {
	click = !click
	renderFunction()
}

const renderFunction = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <br />
      <button onClick={showDetails}>{click === true ? 'Hide details' : 'Show details'}</button>
      <br />
			{/*{click ? <p>Hey. These are some details you can now see!</p> : ''}*/}
			{click && <p>Hey. These are some details you can now see!</p>}
    </div>
  )
  ReactDOM.render(template, document.getElementById('root'));
}

renderFunction()
