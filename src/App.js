import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import PictureGallery from './PictureGallery';
import ThingsToLearn from './ThingsToLearn';
//react component incantation 
class App extends Component {
  render() {
    return (
      <div>
        <h1>Happy React Day!</h1>
        <h3>Things to learn</h3>
        <ThingsToLearn/>
        <h3>Check out Pics</h3>
        <PictureGallery/>
      </div>
    );
  }
}

export default App;
