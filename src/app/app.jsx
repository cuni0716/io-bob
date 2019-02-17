import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './app.css';
import Header from './components/header';
import Footer from './components/footer';
import HomeContainer from './templates/home-container';
import NewContainer from './templates/new-container';

export default class App extends Component {
  render() {
    return [
      <Header key="header" />,
      <Router key="router">
        <div>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/new" component={NewContainer} />
        </div>
      </Router>,
      <Footer key="footer" />,
    ];
  }
}
