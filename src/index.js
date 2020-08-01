import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  React.createElement('h1', {className:'title'},'hello world');
}

ReactDOM.render(<App/>, document.querySelector('#root'));