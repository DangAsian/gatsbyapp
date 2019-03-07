import React from 'react'
import './Box.css'

class Box extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  boxOpenClose = e => {
    e.preventDefault()
    console.log(e.target)

    if (this.state.open === false) {
      this.setState({
        open: true,
      })
    } else {
      this.setState({
        open: false,
      })
    }
  }

  render() {
    const { img } = this.props
    return (
      <div className="box-component">
        {this.state.open === false ? (
          <h1
            className="box-content"
            onClick={this.boxOpenClose}
          >Click me! </h1>
        ) : (
          <img
            className="box-content-open"
            onClick={this.boxOpenClose}
            src={img}
            alt="snowman"
          />
        )}
      </div>
    )
  }
}

export default Box