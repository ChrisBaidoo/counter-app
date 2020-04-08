import React, { Component } from 'react'

class Counter extends Component {
    state = {
        value: this.props.value,
        tags: ["tag1", "tag2", "tag3", "tag4",]
    }
    
    renderTags = () => {

       return this.state.tags.length === 0 ? <p>There are no tags</p> : <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>

    }

    increment = () => {
        this.setState({
            value: this.state.value + 1
        })
    }

    decrement = () =>{
        this.setState({
            value: this.state.value - 1
        })
    }

  

    getbadgeClasses ()  {
        let classes = "badge badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }



    render() { 
        console.log('thjkdfd', this.props)
      

        return (
            <React.Fragment>
                <span className={this.getbadgeClasses()}>{this.state.value}</span>
                <button className="btn btn-primary m-2" onClick={this.increment}>Increment</button> 
                {/* <button className="btn btn-secondary" onClick={this.decrement}>Decrement</button>     */}
                <button onClick={() => this.props.handleDelete(this.props.id)} className="btn btn-danger btn-small m-2">Delete</button>
            </React.Fragment>
        );

    }
}
 
export default Counter;