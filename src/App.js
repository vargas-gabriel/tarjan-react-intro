import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import PictureGallery from './PictureGallery';
import ThingsToLearn from './ThingsToLearn';
import getDate from './utils/getDate';
//react component incantation 
class App extends Component {
//initial state
  state = {
    whatDayIsIt: 'Rice Day',
    feeling: 'Sad',
    //when button clicked
    //whatDayIsIt: 'Cage Day',
    //feeling: 'Clickalus'
  }
  myAwesomeFunction(){
    console.log('this is:', this.state);
  }

  clickalicious =  ()=> {
    console.log('clickalicious was called');
    this.setState({
      feeling: 'Clickalus',
      whatDayIsIt: 'Cage Day'
    });
  }
  render() {
    //access state
    console.log('app state is', this.state);// "this" refers to app
    this.myAwesomeFunction()

   
    return (
      <div>
        <h1>{this.state.feeling} {this.state.whatDayIsIt}!</h1>
        <button onClick={this.clickalicious} >Clickalicious</button>
        <h2>{getDate()}</h2>
        <h3>Things to learn</h3>
        <ThingsToLearn/>
        <h3>Check out Pics</h3>
        <PictureGallery/>
      </div>
    );
  }
}

export default App;
