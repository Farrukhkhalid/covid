
import './App.css';
import Cards from './components/cards/Card' ;
import Chart from './components/chart/Chart';
import Selector from './components/selector/Selector';
import Map from './components/map/Map'
import {fetchData , fetchDailyData , fetchCountries ,fetchDailyChart} from './api/Api';
import React, { Component, PropTypes } from 'react';
import Header from './components/Header/Header'

class App extends React.Component {

state = {
  data : {},
  daily: {},
  chartdata :{} ,
  countries : [] ,
  country : '',
  
}
  async componentDidMount()
  {
    const getData = await fetchData();
    this.setState({data : getData});
   
    const getDaily = await fetchDailyData();
    this.setState({daily : getDaily});

    const getcountries= await fetchCountries();
    this.setState({countries : getcountries});
    

    // const getchart = await fetchDailyChart();
    // this.setState({chartdata : getchart});
    // console.log(` from app ${this.state.chartdata}`)
  
    
    
  }


  countrychangehandler = async (country) => 
  {
      console.log(country)
      this.setState({country : country });
  }

  render() {
  return (
    <div className="App">
     <Header/>
     <Cards data={this.state.data } daily={this.state.daily}/>
     {/* <Selector data={this.state.countries}   changeHandler = {this.countrychangehandler}/> */}
     <Chart data={this.state.chartdata} />
    </div>
  );
 }
}

export default App;

