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
        console.log('Heloo'+ counterId)
        // this.setState({counters: [...this.state.counters, this.state.counters.map(couter =>)]})
    };

    render() { 
        return (
         <div>
           {this.state.counters.map(counter => 
           <Counter key={counter.id} value={counter.value} handleDelete={this.handleDelete}  />)}

        </div> 
         );
    }
}
 
export default Counters;