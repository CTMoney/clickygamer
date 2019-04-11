import { BrowserRouter as Router} from "react-router-dom"
import React, { Component } from "react"
import ImageButtons from "./ImageButtons"
import Jumbotron from "./Jumbotron"
import Navbar from "./Navbar"
import noPain from "../images/nopain.jpg"
import mild from "../images/mild.jpg"
import moderate from "../images/moderate.jpg"
import severe from "../images/severe.png"
import verySevere from "../images/verysevere.png"
import worstPossible from "../images/worstpossible.png"



class Main extends Component {
  state = {
    images: [
      {url: noPain, name: "no pain"},
      {url: mild, name: "mild"},
      {url: moderate, name: "moderate"},
      {url: severe, name: "severe"},
      {url: verySevere, name: "very severe"},
      {url: worstPossible, name: "worst possible"}
    ],
    score: 0,
    topScore: 0
  };
  render() {
    return (
      <Router>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <ImageButtons images={this.state.images}/>
      </Router>
    );
  }
}

export default Main;
