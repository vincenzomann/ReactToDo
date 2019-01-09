import React, { Component } from 'react';
// Class/State component

class AddToDo extends Component{
    
    state = {
        content: ''
    }

    handleChange = (e) => {
        // update state by the id of the input
        this.setState({
            // [field to update]: value to update it with
            // id: buy milk
            [e.target.id]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e);
        // call the function from the root component and pass in the state
        this.props.addToDo(this.state);
        // reset state
        this.setState({
            content: ''
        });        
    }

    render(){
        return (
            <div className="formAddToDo">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="content" onChange={this.handleChange} value={this.state.content} placeholder="Enter item to the To Do list..." />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddToDo;