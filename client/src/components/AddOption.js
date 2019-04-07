import React, { Component } from "react";
import axios from "axios";


class AddOption extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.showDetails = this.showDetails.bind(this);

    this.state = {
      note: '',
      visibility: false
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    // const option = e.target.elements.option.value.trim();
    // // if a value is returned, we know that an error has been returned. If it returns
    // // undefined then the state has been set in the parent class as intended. AKA error=undefined.
    // const error = this.props.handleAddOption(option);
    // console.log(error);

    // this.setState(() => ({ error: error }));
    const task = { note: this.state.note };

    if (task.note && task.note.length > 0) {
      console.log(task)
      axios
        .post("/api/notes", task)
        .then(res => {
          if (res.data) {
            this.props.getOptions();
            this.setState({ note: "" });
          }
        })
        .catch(err => console.log(err));
    } else {
      console.log("input field required");
    }
    
  }

  handleChange(e) {
    this.setState({
      note: e.target.value
    })
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
              <input
                type="text"
                className="input"
                onChange={this.handleChange}
                value={this.state.note}
              />
              <button>Add Option</button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default AddOption;
