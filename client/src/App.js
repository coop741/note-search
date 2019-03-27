import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
// import Action from "./components/Action";
// import Options from "./components/Options";
// import Counter from "./components/Counter";
import AddOption from "./components/AddOption";
import List from "./components/List";


import "bulma/css/bulma.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);

    this.state = {
      options: props.options
    };
  }

  handleDeleteOptions() {
    // this.setState(() => {
    //   return {
    //     options: []
    //   };
    // });
    this.setState(() => ({ options: [] }));
  }

  // handlePick -> pass down to Action, setup onClick - bind here
  // randomly pick option, alert pick
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add to item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    } else {
      this.setState(prevState => ({
        // options: prevState.options.concat([option])
        options: [option].concat(prevState.options)
      }));
    }
  }

  handleDeleteOption(optionToRemove) {
    this.setState(prevState => ({
      // only removes option. If true, it would only keep removed option
      options: prevState.options.filter(option => optionToRemove !== option)
    }));
  }

  render() {
    const title = "List Search";
    const subtitle = "Type below to find what you're looking for!";

    return (
      <div className="content">
        <div className="container">
          <section className="section">
            <Header title={title} subtitle={subtitle} />
          </section>
            <AddOption handleAddOption={this.handleAddOption} />
          <section className="section">
            <List items={this.state.options} delete={this.handleDeleteOption} />
            {/* <Action
              hasOptions={this.state.options.length > 0}
              handlePick={this.handlePick}
            />
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            /> */}
          </section>
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  options: [
    "Description: Sets the name you want attached to your commit transaction. Command: $ git config--global user.name[name]",
    "Description: Install git on Debian - based linux. Command: sudo apt-get install git",
    "Description: Creates a new local repository with the specified name. Command: git init [project-name]",
    "Description: Lists all local branches in the current repository. Command: git branch"
  ]
};

export default App;
