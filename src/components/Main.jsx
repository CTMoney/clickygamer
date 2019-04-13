import { BrowserRouter as Router } from "react-router-dom";
import React, { Component } from "react";
import ImageButtons from "./ImageButtons";
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
      { url: noPain, name: "no pain" },
      { url: mild, name: "mild" },
      { url: moderate, name: "moderate" },
      { url: severe, name: "severe" },
      { url: verySevere, name: "very severe" },
      { url: worstPossible, name: "worst possible" }
    ],
    score: 0,
    topScore: 0
  };

  handleClick = event => {

    if (event.target.dataset.clicked === false) {

      console.log('correct click')

      this.setState({
        score: this.state.score++
      })

      if (this.state.topScore < this.state.score) {
        console.log('new topscore')    
        this.setState({
          topScore: this.state.topScore++
        })
      }

    } else {

      console.log('incorrect click')
      this.setState({
        score: 0
      })
      //todo - add reset to return all data-clicked attributes to false
      //fix logic somewhere.
    }

  }

  render() {
    return (
      <Router>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <ImageButtons
          images={this.state.images}
          handleClick={this.handleClick}
        />
      </Router>
    );
  }
}

export default Main;
