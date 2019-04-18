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

  //stolen from
  //https://bost.ocks.org/mike/shuffle/

  shuffle = array => {
    var m = array.length, t, i

    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--)
      // And swap it with the current element.
      t = array[m]
      array[m] = array[i]
      array[i] = t
    }
    return array
    
  }

  handleClick = event => {
    if (this.state.clicked.indexOf(event.target.id) !== -1) {
      alert("LOSER")
      this.setState({
        images: this.shuffle(this.state.images),
        score: 0,
        clicked: []
      })
    } else {
      this.setState({
        images: this.shuffle(this.state.images),
        score: (this.state.score += 1),
        clicked: (this.state.clicked += event.target.id)
      })

      if (this.state.topScore < this.state.score) {
        this.setState({ topScore: (this.state.topScore += 1) })
      }

      if (this.state.score == this.state.images.length) {
        alert("WINNER")
        this.setState({
          images: this.shuffle(this.state.images),
          score: 0,
          clicked: []
        })
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
