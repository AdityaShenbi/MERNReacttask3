import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: "white",
      showColorList: false,
    };
  }

  toggleColorList = () => {
    this.setState((prevState) => ({
      showColorList: !prevState.showColorList,
    }));
  };

  selectColor = (color) => {
    this.setState({
      selectedColor: color,
      showColorList: false,
    });
  };

  render() {
    const { colors } = this.props;
    const { selectedColor, showColorList } = this.state;

    return (
      <div style={{backgroundColor: selectedColor,height: '300px', margin: '75px', paddingTop: '250px',transition: 'background-color 0.5s', borderRadius:'15px'}}>
        {showColorList && (
          <div className="color-list" style = {{display: 'flex', alignItems: 'center',justifyContent: 'center', paddingBottom:'15px'}}>
            {colors.map((color, index) => (
              <div
                key={index}
                className="color-item"
                style={{ backgroundColor: color }}
                onClick={() => this.selectColor(color)}
              ></div>
            ))}
          </div>
        )}
        <button onClick={this.toggleColorList}>Pick a color</button>
      </div>
    );
  }
}

export default ColorPicker;
