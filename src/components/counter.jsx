import React, { Component } from 'react'

class Counter extends Component {
   
   

  

    getbadgeClasses ()  {
        let classes = "badge badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }



    render() {
        return (
            <React.Fragment>
                <span className={this.getbadgeClasses()}>{this.props.counter.value}</span>
                <button className="btn btn-primary m-2" onClick={() => this.props.handleIncrement(this.props.counter)}>Increment</button> 
                {/* <button className="btn btn-secondary" onClick={this.decrement}>Decrement</button>     */}
                <button onClick={() => this.props.handleDelete(this.props.counter.id)} className="btn btn-danger btn-small m-2">Delete</button>
            </React.Fragment>
        );

    }
}
 
export default Counter;