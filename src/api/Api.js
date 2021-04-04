import axios from "axios";

const url = "https://covid19.mathdro.id/api";

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
    const { data } = await axios.get(`${url}/daily`);

    // const modifiedData = {
    //   confirmed: data.confirmed.value,
    //   recovered: data.recovered.value,
    //   deaths: data.deaths.value,
    //   lastUpdate: data.lastUpdate
    // };
    return data;
  } catch (error) {}
};
