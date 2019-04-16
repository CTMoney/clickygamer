import { BrowserRouter as Router } from "react-router-dom"
import React, { Component } from "react"
import ImageButtons from "./ImageButtons"
import ImageDeck from "./ImageDeck"
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
      { id: 0, url: noPain, name: "no pain" },
      { id: 1, url: mild, name: "mild" },
      { id: 2, url: moderate, name: "moderate" },
      { id: 3, url: severe, name: "severe" },
      { id: 4, url: verySevere, name: "very severe" },
      { id: 5, url: worstPossible, name: "worst possible" }
    ],
    score: 0,
    topScore: 0,
    clicked: []
  }

  handleClick = event => {
    let clickedArr = this.state.clicked

    if (this.state.score == 6) {
      alert("WINNER")
      this.setState({
        score: 0,
        clicked: []
      })
    } else if (clickedArr.includes(event.target.id)) {
      alert("LOSER")
      this.setState({
        score: 0,
        clicked: []
      })
    } else {
      clickedArr.push(event.target.id)
      this.setState({
        score: (this.state.score += 1),
        clicked: clickedArr
      })
      if (this.state.topScore < this.state.score) {
        this.setState({ topScore: (this.state.topScore += 1) })
      }
    }
  }

  render() {
    return (
      <Router>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Jumbotron />
        <ImageDeck>
          {this.state.images.map(image => {
            return (
              <ImageButtons
                id={image.id}
                name={image.name}
                image={image.url}
                handleClick={this.handleClick}
              />
            )
          })}
        </ImageDeck>
      </Router>
    )
  }
}

export default Main
