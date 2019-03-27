import React, { Component } from "react";

class AddOption extends Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.showDetails = this.showDetails.bind(this)

    this.state = {
      error: undefined,
      visibility: false
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    // if a value is returned, we know that an error has been returned. If it returns
    // undefined then the state has been set in the parent class as intended. AKA error=undefined.
    const error = this.props.handleAddOption(option);
    console.log(error);

    this.setState(() => ({ error: error }));
  }

  showDetails() {
    // this.state.click = !this.state.click
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
    console.log(this.state.visibility);
  }

  render() {
    return (
      <div>
        <button onClick={this.showDetails}>
          {this.state.visibility === true ? "Hide" : "Add New Item"}
        </button>
        {this.state.visibility && (
          <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
              <input type="text" name="option" className="input" />
              <button>Add Option</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default AddOption;
