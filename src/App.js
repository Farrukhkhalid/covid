
import './App.css';
import Cards from './components/cards/Card' ;
import Chart from './components/chart/Chart';
import Selector from './components/selector/Selector';
import Map from './components/map/Map'
import {fetchData , fetchDailyData , fetchCountries} from './api/Api';
import React, { Component, PropTypes } from 'react';
import Header from './components/Header/Header'

class App extends React.Component {

state = {
  data : {},
  daily: {},
}
  async componentDidMount()
  {
    const getData = await fetchData();
    this.setState({data : getData});
    const getDaily = await fetchDailyData();
    this.setState({daily : getDaily});
    
    
  }

  render() {
  return (
    <div className="App">
     <Header/>
     <Cards data={this.state.data } daily={this.state.daily}/>
     <Selector/>
    </div>
  );
 }
}

export default App;

