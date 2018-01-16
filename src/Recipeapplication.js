import React, { Component } from 'react';
import './Recipeapplication.css';
import Recipe from './Recipe';

class Recipeapplication extends Component {
  render() {
    return (
      <div className="App">
        <Recipe 
        title="Pastor" 
        ingredients= {['flour', 'water']}
        instructions = "Mix ingredients"
        img ="spagetti.jpg"
        />
      </div>
    );
  }
}

export default Recipeapplication;
