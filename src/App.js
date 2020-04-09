import React, { Component } from 'react';
import Counters from './components/counters'
import Navbar from './components/navbar';
// import './App.css';

class App extends Component {

    
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

handleIncrement = (counter) => {
    console.log(counter)
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter);
    counters[index] = {...counter}
    counters[index].value++;
    this.setState({counters})
}

 
  render() { 
    return (
      <div className="App">
        <Navbar/>
        <main className="container">
        <Counters   handleDelete={this.handleDelete} counters={this.state.counters} handleIncrement={this.handleIncrement} />
        </main>
      </div>
    );
  }
}
 
// export default App;

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <main className="container">

//     <Counters/>
//       </main>
//     </div>
//   );
// }

export default App;
