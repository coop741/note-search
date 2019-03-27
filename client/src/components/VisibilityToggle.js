// VisibilityToggle - render, constructor, handleToggleVisibility
// state: visibility -> false

import React, { Component } from "react";

class VisibilityToggle extends Component {
  constructor(props) {
    super(props)
    this.showDetails = this.showDetails.bind(this)

    this.state = {
      visibility: false
    }
  }

  showDetails() {
    // this.state.click = !this.state.click
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
    console.log(this.state.visibility)
  }

  render() {
    return (
      <div>
        <button onClick={this.showDetails}>{this.state.visibility === true ? 'Hide details' : 'Show details'}</button>
        {this.state.visibility && <p>These are details you can now see!</p>}
      </div>
    )
  }
}

export default VisibilityToggle