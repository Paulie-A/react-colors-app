import React, { Component } from 'react';
import Palette from './Palette';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';

// function App() {
//   return (
//     <div className="App">
//      <Palette palette={seedColors[4]} />
//     </div>
//   );
// }

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]) ) ;
    return (
      <div>
        <Palette {...seedColors[7]} />
      </div>
    );
  }
}

export default App;
