import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.css'

// Components
import Header from './components/header'
import NewsList from './components/news_list'
import JSON from './db.json'
import Footer from './components/footer'

function year () {
  const newDate = new Date();
  return newDate.getFullYear();
}
class App extends Component {

  constructor() {
    super();

    this.state = {
      news: JSON,
      footerText: 'I am a happy footer'
    }
  }

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <Header/>
        <NewsList news={this.state.news} />

        <div>The date is { year()} </div>
        <Footer footer={this.state.footerText}/>
      </div>
    )
  }
  
}

ReactDOM.render(<App/>, document.querySelector('#root'));