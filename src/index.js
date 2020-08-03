import React from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.css'

// Components
import Header from './components/header'
import NewsList from './components/news_list'

function year () {
  const newDate = new Date();
  return newDate.getFullYear();
}

const App = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <Header/>
      <NewsList/>

      <div>The date is { year()} </div>
    </div>
  )
}

ReactDOM.render(<App/>, document.querySelector('#root'));