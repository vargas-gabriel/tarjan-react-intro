import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import PictureGallery from './PictureGallery';
//react component incantation 
class App extends Component {
  render() {
    return (
      <div>
        <h1>Happy React Day!</h1>
        <h3>Things to learn</h3>
        <ul>
          <li>Html inside JS files</li>
          <li>Render</li>
          <li>Import/Export</li>
        </ul>
        <h3>Check out Pics</h3>
        <PictureGallery/>
      </div>
    );
  }
}

export default App;
