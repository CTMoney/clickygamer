import { BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";
import ImageButtons from "./ImageButtons";
import ImageDeck from "./ImageDeck";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import noPain from "../images/nopain.jpg";
import mild from "../images/mild.jpg";
import moderate from "../images/moderate.jpg";
import severe from "../images/severe.png";
import verySevere from "../images/verysevere.png";
import worstPossible from "../images/worstpossible.png";

class Main extends Component {
  state = {
    images: [
      { id: 0, url: ".", name: "no pain" },
      { id: 1, url: ".", name: "mild" },
      { id: 2, url: ".", name: "moderate" },
      { id: 3, url: ".", name: "severe" },
      { id: 4, url: ".", name: "very severe" },
      { id: 5, url: ".", name: "worst possible" }
    ],
    score: 0,
    topScore: 0,
    clicked: []
  };

  handleClick = event => {
    
    if (this.state.clicked.includes(event.target.id)) {
      alert("LOSER");
      this.setState({
        score: 0,
        clicked: []
      });
    } else {
      this.setState({
        score: (this.state.score += 1),
        clicked: this.state.clicked.push(event.target.id)
      });

      if (this.state.topScore < this.state.score) {
        this.setState({ topScore: (this.state.topScore += 1) });
      }
    }

    console.log(this.state.topScore);
    console.log(this.state.score);
  };

  render() {
    return (
      <Router>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <ImageDeck>
          {this.state.images.map(image => {
            return <ImageButtons
              id={image.id}
              name={image.name}
              image={image.url}
              handleClick={this.handleClick}
            />
          })}
        </ImageDeck>
      </Router>
    );
  }
}

export default Main;
