import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {

    render() { 
        const {handleReset,handleDelete, handleIncrement, counters, handleDecrement } = this.props
        return (
         <div>
             <button onClick={handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
             {counters.map(counter => 
             <Counter key={counter.id}  handleDelete={handleDelete} handleDecrement={handleDecrement} counter={counter} handleIncrement={handleIncrement}  />)}
        </div> 
         );
    }
}
 
export default Counters;