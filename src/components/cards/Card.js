import { Slide ,Card, CardContent, Typography, Grid } from "@material-ui/core";
import Countup from "react-countup";


const StyleRecovered = {

    background: '#27ae60',
    color: 'white',
    textAlign: 'left',
    margin: '0 1% 1%'
} ;

const Styleinfected = {
    background: '#3498db',
    color: 'white',
    textAlign: 'left',
    margin: '0 1% 1%'
};
const StyleDeaths ={
    background: '#e74c3c',
    color: 'white',
    textAlign: 'left',
    margin: '0 1% 1%'
} ;





function Cards(props) {
  console.log(props);
  return ( 
    <div className='CardContainer'>
      <Grid container spacing={3} justify="center">
         <Grid item component={Card} style={Styleinfected}>
          <CardContent className='Card' >
            <Typography>INFECTED</Typography>
            <Typography variant="h5">
            <Countup
                start={0}
                end={props.data.recovered}
                duration={1}
                separator=","
              />
            </Typography>
            <Typography>{new Date(props.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              number of active cases in covid
            </Typography>
          </CardContent>
       </Grid>
 
        <Grid item component={Card} style={StyleRecovered}>
        <CardContent className='Card'>
            <Typography >RECOVERED</Typography>
            <Typography variant="h5">
                <Countup
                start={0}
                end={props.data.deaths}
                duration={2}
                separator=","
              /></Typography>
            <Typography>{new Date(props.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              number of active cases in covid
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} style={StyleDeaths}>
        <CardContent className='Card'>
            <Typography color="textSecoundary">DEATHS</Typography>
            <Typography variant="h5"><Countup
                start={0}
                end={props.data.confirmed}
                duration={1}
                separator=","
              /></Typography>
            <Typography>{new Date(props.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              number of active cases in covid
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;
