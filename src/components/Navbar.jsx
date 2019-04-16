import React from "react"
import BrowserRouter, { Link } from "react-router-dom"

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h1 className="navbar-brand">
        <Link to="/" className="text-white" style={{ textDecoration: "none" }}>
          Clicky Game
        </Link>
      </h1>
      <h2 className="navbar-text mx-auto">Click an image to begin!</h2>
      <h2 className="navbar-text ml-auto">{`Score: ${ props.score } | Top Score: ${ props.topScore }`}</h2>
    </nav>
  )
}

export default Navbar
