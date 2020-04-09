import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
  
    state = {
        counters: [
            {id: 1, value: 0},
            {id: 2, value: 10},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
    }

    handleDelete = counterId => {
        this.setState({counters: [...this.state.counters.filter(counter => counter.id !== counterId)]})
    };

    handleReset = () => {
        this.setState({counters: [...this.state.counters.map(counter => {counter.value = 0; return counter})]})
    }

    render() { 
        return (
         <div>
             <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
           {this.state.counters.map(counter => 
           <Counter key={counter.id}  handleDelete={this.handleDelete}  counter={counter}  />)}

        </div> 
         );
    }
}
 
export default Counters;