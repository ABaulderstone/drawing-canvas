import React, {Component} from "react";


class BrushSize extends Component {
    handleChange = (event) => {
        const {onBrushSizeSelectorChange} = this.props;
        const brushSize = event.target.value;
        onBrushSizeSelectorChange(brushSize);
    }

    
    render () {
        return (
        <form onSubmit={this.onNumberInput}> 
        <label> Brush Size</label>
        <input type="number" 
        value={this.props.brushSize} 
        onChange={this.handleChange} />
        
        </form>
        );


    }

}

export default BrushSize;