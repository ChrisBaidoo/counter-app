import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {

    render() { 
        return (
         <div>
             <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
             {this.props.counters.map(counter => 
             <Counter key={counter.id}  handleDelete={this.props.handleDelete}  counter={counter} handleIncrement={this.props.handleIncrement}  />)}
        </div> 
         );
    }
}
 
export default Counters;