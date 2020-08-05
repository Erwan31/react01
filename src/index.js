import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './styles/styles.css'

// Components
import Header from './components/header'
import NewsList from './components/news_list'
import JSON from './db.json'
import Footer from './components/footer'
import Lifecycles from './components/lifecycle'

function year () {
  const newDate = new Date();
  return newDate.getFullYear();
}
class App extends Component {

  constructor() {
    super();

    this.state = {
      news: JSON,
      footerText: 'I am a happy footer',
      filtered: JSON,
      visible: true,
    }
  }

  getKeywords = (event) => {
    let keywords = event.target.value;
    let filtered = this.state.news.filter( (item) => {
      return item.title.indexOf(keywords) > -1;
    });

    console.log(filtered);

    this.setState( {filtered} );

  } 

  toggleComp = () => {
    this.setState({visible: !this.state.visible})
  }

  render() {
    const state = this.state;
    let newsFiltered = state.filtered;
    let newsAll = state.news;

    return (
      <div>
        <h1>Hello world!</h1>
        <Header keywords={this.getKeywords}/>
        <NewsList news={newsFiltered.length === 0 ? newsAll : newsFiltered}/>
        
        <button onClick={this.toggleComp}>Toggle it</button>
        {this.state.visible ? <Lifecycles/> : null}
        <div>The date is { year()} </div>
        <br/>
        <Footer footer={this.state.footerText}/>
      </div>
    )
  }
  
}

ReactDOM.render(<App/>, document.querySelector('#root'));