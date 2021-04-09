import { Slide ,Card, CardContent, Typography, Grid } from "@material-ui/core";
import Countup from "react-countup";


const StyleRecovered = {

    background: '#27ae60',
    color: 'white',
    textAlign: 'left',
    margin: '1% 1% 1%'
} ;

const Styleinfected = {
    background: '#3498db',
    color: 'white',
    textAlign: 'left',
    margin: '1% 1% 1%'
};
const StyleDeaths ={
    background: '#e74c3c',
    color: 'white',
    textAlign: 'left',
    margin: '1% 1% 1%'
} ;



const StyleDailyRecov = {

    borderBottom : '5px solid #27ae60' ,
    color: '#2b2b2b',
    textAlign: 'left',
    padding : '0px 50px 0px 10px',
    margin: '1% 1% 1%' ,
    
} ;

const Style2 = {
    background: '#3498db',
    color: 'white',
    textAlign: 'left',
    margin: '1% 1% 1%'
};
const Style3 ={
    background: '#e74c3c',
    color: 'white',
    textAlign: 'left',
    margin: '0% 1% 1%'
} ;




function Cards(props) {
  return ( 
    <div className='CardContainer'>
      <Grid container spacing={3} justify="center">
         <Grid item component={Card} style={Styleinfected}>
          <CardContent className='Card' >
            <Typography>CONFIRMED</Typography>
            <Typography variant="h4">
            <Countup
                start={0}
                end={props.data.recovered}
                duration={1}
                separator=","
              />
            </Typography>
            <Typography>{new Date(props.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of active cases in covid
            </Typography>
          </CardContent>
       </Grid>
 
        <Grid item component={Card} style={StyleRecovered}>
        <CardContent className='Card'>
            <Typography >RECOVERED</Typography>
            <Typography variant="h4">
                <Countup
                start={0}
                end={props.data.deaths}
                duration={1}
                separator=","
              /></Typography>
            <Typography>{new Date(props.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of recovered cases in covid
            </Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} style={StyleDeaths}>
        <CardContent className='Card'>
            <Typography color="textSecoundary">DEATHS</Typography>
            <Typography variant="h4"><Countup
                start={0}
                end={props.data.confirmed}
                duration={1}
                separator=","
              /></Typography>
            <Typography>{new Date(props.data.lastUpdate).toDateString()}</Typography>
            <Typography variant="body2">
              Number of Deaths cases in covid
            </Typography>
          </CardContent>
        </Grid>
      </Grid>






      <Grid container spacing={4} justify="center">
         <Grid item component={Card} style={StyleDailyRecov}>
          <CardContent className='Card' >
          <Typography variant="h5" >Daily</Typography>
           <Typography>INFECTED</Typography>
            <Typography variant="h5">
            <Countup
                start={0}
                end={props.daily.todayCases}
                duration={1}
                separator=","
              />
            </Typography>
            <Typography>{new Date(props.daily.updated).toDateString()}</Typography>
           
          </CardContent>
       </Grid>
       <Grid item component={Card} style={StyleDailyRecov}>
          <CardContent className='Card' >
          <Typography variant="h5">Daily</Typography>
            <Typography>Deaths</Typography>
            <Typography variant="h5">
            <Countup
                start={0}
                end={props.daily.todayDeaths}
                duration={1}
                separator=","
              />
            </Typography>
            <Typography>{new Date(props.daily.updated).toDateString()}</Typography>
           
          </CardContent>
       </Grid>
        <Grid item component={Card} style={StyleDailyRecov}>
        <CardContent className='Card'>
        <Typography variant="h5">Daily</Typography>
            <Typography >CRITICAL</Typography>
            <Typography variant="h5">
                <Countup
                start={0}
                end={props.daily.critical}
                duration={1.5}
                separator=","
              /></Typography>
            <Typography>{new Date(props.daily.updated).toDateString()}</Typography>
           
          </CardContent>
        </Grid>
        <Grid item component={Card} style={StyleDailyRecov}>
        <CardContent className='Card'>
        <Typography variant="h5">Daily</Typography>
            <Typography >RECOVERED</Typography>
            <Typography variant="h5"><Countup
                start={0}
                end={props.daily.todayRecovered}
                duration={1.5}
                separator=","
              /></Typography>
            <Typography>{new Date(props.daily.updated).toDateString()}</Typography>
            
          </CardContent>
        </Grid>
      </Grid>

       





    </div>
  );
}

export default Cards;
