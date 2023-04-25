import React, { Component } from "react";
import './BoxList.css'
import Box from './Box';
import NewBoxForm from "./NewBoxForm";



class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [] //we store the potential new boxes in an array 
            //over witch we .map later and will make the new box by using the Box component 
        }
        this.renderBoxes = this.renderBoxes.bind(this);
        this.createNewBox = this.createNewBox.bind(this);

    }

    renderBoxes() {
        return this.state.boxes.map((box) => {
            return <Box
                key={box.id}
                id={box.id}
                width={box.width}
                height={box.height}
                color={box.backgroundColor}
                removeBox={() => this.removeBox(box.id)}//a way of doing it inline instead of the binding method.
            />
        })
    }

    createNewBox(box) {
        let newBox = [...this.state.boxes, box];
        this.setState(state => ({ boxes: newBox }))
    }

    removeBox(id) {
        this.setState({
            boxes: this.state.boxes.filter(box => box.id !== id)//box id NOT to be equal to the id that was passed in.
            // make a new array containing the boxes which did not contain the id that was passed in.
        })
    }

    render() {
        return (
            <div>

                <NewBoxForm createNewBox={this.createNewBox} />
                {this.renderBoxes()}

            </div>
        )
    }
}

export default BoxList;