import React, { Component } from 'react';
import Header from'./components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Nav from './components/Nav/Nav.js';
import Card from  "./components/Card/index.js";
import "./App.css";
import characters from "./characters.json";


//Game starts with a score of 0
//Score increases if image is clicked
//Score resets if same image is clicked twice
//Images resuffle after a image is clicked
//Game restarts if Score is 0

class App extends Component {

  shuffle = id => {
    let clicked = this.state.clicked;

        if (clicked.includes(id)) {
            this.setState({ clicked: [], score: 0, message: "You lose!" });
            return;
        } else {
            clicked.push(id)

            if (clicked.length === 12) {
                this.setState({ score: 12, message: "You win! Click on another picture to play again!", clicked: [] })
                return;
            }
            this.setState({ characters, clicked, score: clicked.length, message: "" });

            for (let i = characters.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [characters[i], characters[j]] = [characters[j], characters[i]];
            }
}
  }

  state = {
    characters,
    clicked: [],
    score: 0,
    goal: 12,
    message: "",
};

  render() {
    return (
      
      <div className="App">
        <Nav 
          score={this.state.score}
          message={this.state.message}
        />
        <Header />
        {this.state.characters.map(character => (
          <Card 
            id={character.id}
            key={character.id}
            imageUrl={character.imageUrl}
            name={character.name}
            shuffle={this.shuffle}
          />
        ))}
        
        <Footer />
      </div>
    );
  }
}

export default App;
