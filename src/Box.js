import React, { Component } from "react";
import NewBoxForm from "./NewBoxForm";
// import './Box.css'

class Box extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div>
                <div className="box" style={{
                    height: `${this.props.height}em`,
                    width: `${this.props.width}em`,
                    backgroundColor: this.props.backgroundColor
                }}>

                </div>
                <button onClick={this.props.removeBox}>Remove Box!</button>
            </div>
        )
    }
}

export default Box;
