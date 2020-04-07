import React, { Component } from 'react'

class Counter extends Component {
    state = {
        count: 0
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrement = () =>{
        this.setState({
            count: this.state.count - 1
        })
    }

    getbadgeClasses ()  {
        let classes = "badge badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    render() { 
        return (
            <React.Fragment>
                <h1>Hello Word</h1>
                <span className={this.getbadgeClasses()}>{this.state.count}</span>

                <button className="btn btn-primary m-2" onClick={this.increment}>Increment</button> 
                <button className="btn btn-secondary" onClick={this.decrement}>Decrement</button>     
            </React.Fragment>
        );

    }
}
 
export default Counter;