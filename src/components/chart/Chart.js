import React, { useState, useEffect } from 'react';
import axios from "axios";
import Selector from '../selector/Selector'

import { Line, Bar } from 'chart.js';

import { fetchDailyChart } from '../../api/Api';
import Charts from 'react-apexcharts';




const Chart = ({ chartdata }) => {
  const [dailyData, setDailyData] = useState(null);
  const [history, setHistory] = useState('');
  const [Country, setContry] = useState('');
  const[label , setlabel] = useState([])
  const [confirmed, setconfirmed] = useState([]);
  const [recovered, setrecovered] = useState([]);
  const [death, setdeath] = useState([]);





  useEffect(() => {
    const fetchMyAPI = async () => {

      try{

        const data = await axios.get('https://disease.sh/v3/covid-19/historical/all');
        setDailyData(data);
        console.log(dailyData)
        setlabel(Object.keys(dailyData.data.cases))
        setconfirmed(Object.values(dailyData.data.cases)) ;
        setrecovered(Object.values(dailyData.data.recovered));
        setdeath(Object.values(dailyData.data.deaths));

      }catch(error) {}
      
    

    };

    fetchMyAPI();

    // console.log(Object.values(dailyData.data.cases));
    // console.log(dailyData.data.cases)
  },[dailyData]);

  

  const options = {
    chart: {

      type: 'line',
      zoom: {
        enabled: false
      }
    },


    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    title: {
      text: 'Previous 30 days',
      align: 'left'
    },
    plotOptions: {
      bar: {
        borderRadius: 2,
        columnWidth: '90%',
        horizontal: false,
      }
    },
    xaxis: {

      categories: label,
    }
  }
  const series = [{
    name: 'Confirmed',
    data: confirmed
  },

  {
    name: 'Recovered',
    data: recovered
  },
  {
    name: 'Deaths',
    data: death
  }
  ];


  return (
    <>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <h1>{Country}</h1>
        <Charts options={options} series={series} type="bar" width={1000} height={500} />


        {/* {lineChart} */}
        {/* {country ? barChart : lineChart} */}
      </div>
    </>
  );
};

export default Chart;