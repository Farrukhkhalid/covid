
import './App.css';
import Cards from './components/cards/Card' ;
import Chart from './components/chart/Chart';
import Selector from './components/selector/Selector';
import Map from './components/map/Map'
import {fetchData} from './api/Api';
import React, { Component, PropTypes } from 'react';
import Header from './components/Header/Header'

class App extends React.Component {

state = {
  data : {},
}
  async componentDidMount()
  {
    const getData = await fetchData();
    this.setState({data : getData});
    
  }

  render() {
  return (
    <div className="App">
     <Header/>
     <Cards data={this.state.data}/>
    </div>
  );
 }
}

export default App;

