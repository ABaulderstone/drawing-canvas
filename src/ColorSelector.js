import React, { Component } from "react";

class ColorSelector extends Component {

    static defaultProps = {
      hex: "#f4424b"
  }
   
  onInputChange = (event) => {
      const {onColorSelectorChange} = this.props;
      const hex = event.target.value;
      onColorSelectorChange(hex);
  }



    render() {
    const {hex} = this.props;
    return (
    <input 
    type="color"  
    onChange= {this.onInputChange}
    value={hex}/>
    );
  };

 
};

export default ColorSelector;
