import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props)
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)

    this.state = {
      count: props.count
    }
  }
  
  handleAddOne() {
    console.log('Added One')
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }

  handleMinusOne() {
    console.log('Minus One')
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    })
  }

  handleReset() {
    console.log('Reset')
    // We want to pass a function instead of the raw object to insure asychronous calls
    // to state happen in the correct order. 
    this.setState(() => {
      return {
        count: 0
      }
    })
    
    // older way 
    // calls to setState are asynchronous, which doesn't mean the change to count will
    // happen on the very next line (when compiled). IE count: 0 will never be reset,
    // it is accessing the wrong state value when presented with two calls
    // this.setState({
    //   count: 0
    // })
    // this.setState({
    //   count: this.state.count + 1
    // })

    // this can be done with updater function calls that were first used above.
    // Now, React will know to first set count=0, then increment by 1, then render
    // 1 instead of just prevState.count + 1. React realizes there is another update to count
    // that needs to be called before the render. 
    // this.setState(() => {
    //   return {
    //     count: 0
    //   }
    // })
    // this.setState((prevState) => {
    //   return {
    //     count: prevState.count + 1
    //   }
    // })
  }
  
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

Counter.defaultProps = {
  count: 0
}

export default Counter