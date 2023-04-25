
import './App.css';
import { Component } from 'react';
import BoxList from './BoxList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Color Box Maker</h1>
        <BoxList />
      </div>
    )
  }
}

export default App;
