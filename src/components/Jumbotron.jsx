import React from "react"

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid" style={heroImage}>
      <div className="container">
        <h1 className="display-4 text-center text-white">Clicky Game!</h1>
        <p className="lead text-center text-white">
          Click on an image to earn points, but don't click on any more than
          once!
        </p>
      </div>
    </div>
  )
}

const heroImage = {
  background:
    "url('http://synariad.com/wp-content/uploads/2015/03/genericbackgrounddark.jpg')",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  position: "relative"
}

export default Jumbotron
