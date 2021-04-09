import React, { useState, useEffect } from 'react';
import axios from "axios";

import { Line, Bar } from 'chart.js';

import { fetchDailyChart } from '../../api/Api';
import Charts from 'react-apexcharts' ;


const url = "https://covid19.mathdro.id/api";

const Chart = () => {
  const [dailyData, setDailyData] = useState({});




 
  useEffect(() => {
    const fetchMyAPI = async () => {
      // const initialDailyData = await fetchDailyChart();
      const data = await axios.get('https://disease.sh/v3/covid-19/historical/all');
      setDailyData(data);
    
    };

    fetchMyAPI();
    console.log(Object.values(dailyData.data.cases));
    // console.log(dailyData.data.cases)
  }, []);

  // const barChart = (
  //   confirmed ? (
  //     <Bar
  //       data={{
  //         labels: ['Infected', 'Recovered', 'Deaths'],
  //         datasets: [
  //           {
  //             label: 'People',
  //             backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
  //             data: [confirmed.value, recovered.value, deaths.value],
  //           },
  //         ],
  //       }}
  //       options={{
  //         legend: { display: false },
  //         title: { display: true, text: `Current state in ${country}` },
  //       }}
  //     />
  //   ) : null
  // );

  // const lineChart = (
  //   dailyData[0] ? (
  //     <Line
  //       data={{
  //         labels: dailyData.map(({ date }) => new Date(date).toLocaleDateString()),
  //         datasets: [{
  //           data: dailyData.map((data) => data.confirmed),
  //           label: 'Infected',
  //           borderColor: '#3333ff',
  //           fill: true,
  //         }, {
  //           data: dailyData.map((data) => data.deaths),
  //           label: 'Deaths',
  //           borderColor: 'red',
  //           backgroundColor: 'rgba(255, 0, 0, 0.5)',
  //           fill: true,
  //         },  {
  //           data: dailyData.map((data) => data.recovered),
  //           label: 'Recovered',
  //           borderColor: 'green',
  //           backgroundColor: 'rgba(0, 255, 0, 0.5)',
  //           fill: true,
  //         },
  //         ],
  //       }}
  //     />
  //   ) : null
  // );

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
      horizontal: false,
    }
  },
  xaxis: {

    categories: Object.keys(dailyData.data.cases),
  }
}
const series = [{
  name: 'Confirmed' ,
  data: Object.values(dailyData.data.cases)
} ,

{
  name: 'Recovered',
  data: Object.values(dailyData.data.recovered)
} ,
{
  name: 'Deaths',
  data: Object.values(dailyData.data.deaths)
}
] ;



  return (
    <div style={{display : 'flex' , justifyContent: 'center' , marginTop : '20px'}}>
      
    <Charts  options={options} series={series} type="bar" width={1000} height={500} />

      
      {/* {lineChart} */}
      {/* {country ? barChart : lineChart} */}
    </div>
  );
};

export default Chart;