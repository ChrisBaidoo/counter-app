import React, { Component } from 'react'

class Counter extends Component {
   
    getbadgeClasses ()  {
        let classes = "badge badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    render() {
        const {handleIncrement, handleDecrement, handleDelete, counter} = this.props

        return (
            <React.Fragment>
                <span className={this.getbadgeClasses()}>{counter.value}</span>
                <button className="btn btn-primary m-2" onClick={() => handleIncrement(counter)}>Increment</button> 
                <button className="btn btn-secondary" onClick={() => handleDecrement(counter)}>Decrement</button>    
                <button onClick={() => handleDelete(counter.id)} className="btn btn-danger btn-small m-2">Delete</button>
            </React.Fragment>
        );

    }
}
 
export default Counter;