import React, { Component } from 'react';
import DisplayAndContainer from './Components/DC/index';
import HigherOrderComponent from './Components/HOC/index';
import PropsChildren from './Components/PropsChildren/index';
import RenderProps from './Components/RenderProps/index';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      display: ''
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle(display) {
    this.setState ({
      display
    })
  }
  
  render() {
    let { display } = this.state;
    return (
    <div>
      <div className='btns'>
        <button onClick={() => this.toggle('dc')}>display and container</button>
        <button onClick={() => this.toggle('hoc')}>higher order</button>
        <button onClick={() => this.toggle('rp')}>render props</button>
        <button onClick={() => this.toggle('pc')}>props.children</button>
      </div>

      { display === 'dc' && <DisplayAndContainer />}
      { display === 'hoc' && <HigherOrderComponent />}
      { display === 'rp' && <RenderProps />}
      { display === 'pc' && <PropsChildren />}
    </div>
          );
      }
}

export default App;
