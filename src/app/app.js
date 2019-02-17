import React, { Component } from 'react';
import './app.css';
import Header from './components/header';
import Footer from './components/footer';

export default class App extends Component {
  render() {
    return [
      <Header />,
      <Footer />,
    ];
  }
}
