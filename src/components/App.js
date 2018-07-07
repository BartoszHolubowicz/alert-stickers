import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categories from './Categories';
import SidePanel from './SidePanel';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Categories />
        <SidePanel />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { 
    categories: state.categories,
    showSidePanel: state.showSidePanel
  }
}

App = connect(mapStateToProps)(App);

export default App;
