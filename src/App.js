import React from 'react';
import './App.css';
import ColorPicker from './Components/C2'; 

function App() {
  const colorOptions = ['red', 'lime', 'blue', 'yellow', 'fuchsia','aqua','orange','darkmagenta','lightpink','green','lightcoral','mediumturquoise','brown','darkorange','cadetblue','gold'];

  return (
    <div className="App">
      <h1>Color Picker</h1>
      <div className = "block"><ColorPicker colors={colorOptions} /> </div>
    </div>
  );
}

export default App;