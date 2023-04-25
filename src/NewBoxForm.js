import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import './NewBoxForm.css';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { height: '', width: '', backgroundColor: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        const newBox = { ...this.state, id: uuidv4() }//we extract all of the properties from inside 
        //and we add the uuid 
        this.props.createNewBox(newBox);//we pass the new object as an argument.
        this.setState({ height: '', width: '', backgroundColor: '' })
    }


    render() {
        return (
            <div>
                <form className="Form" onSubmit={this.handleSubmit}>
                    <div className="Form-height">
                        <label htmlFor="height">Height</label>
                        <input
                            type="text"
                            placeholder="height"
                            id="height"
                            name="height"
                            value={this.state.height}
                            onChange={this.handleChange
                            }></input>
                    </div>
                    <div className="Form-width">
                        <label htmlFor="width">Width</label>
                        <input
                            type="text"
                            placeholder="width"
                            id="width"
                            name="width"
                            value={this.state.width}
                            onChange={this.handleChange}></input>
                    </div>
                    <div className="Form-backgroundColor">
                        <label htmlFor="backgroundColor">backgroundColor</label>
                        <input
                            type="text"
                            placeholder="backgroundColor"
                            id="backgroundColor"
                            name="backgroundColor"
                            value={this.state.backgroundColor}
                            onChange={this.handleChange}></input>
                    </div>
                    <button>Add a New Box!</button>
                </form>
            </div>
        )
    }
}

export default NewBoxForm;
