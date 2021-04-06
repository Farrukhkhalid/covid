import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const urlall = 'https://disease.sh/v3/covid-19/all' ;

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url);

    const modifiedData = {
      confirmed: data.confirmed.value,
      recovered: data.recovered.value,
      deaths: data.deaths.value,
      lastUpdate: data.lastUpdate
    };
    return modifiedData;
  } catch (error) {}
};


export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(urlall);

    const modifiedData = {
      todayCases: data.todayCases,
      todayDeaths: data.todayDeaths,
      todayRecovered: data.todayRecovered,
      critical: data.critical,
      updated: data.updated
    };
    return modifiedData;
  } catch (error) {}
};



export const fetchCountries = async () => 
{

try{
  // const {data : { countries } } = await axios.get(`${url}/countries`);

  // return countries.map(countries => countries.name) ;
  const {data : { countries } }  = await axios.get(`${url}/countries`);
  const modifiedarray = countries.map(country => country.name) ;
  // console.log(modifiedarray);
  return  modifiedarray ;
  
}
catch (error) {}


}
