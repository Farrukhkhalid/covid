import {useState , useEffect} from 'react'
import {NativeSelect , FormControl} from '@material-ui/core'
import {fetchCountries} from './../../api/Api'

const StyleSelector= {
    justifycontent: 'center',
    width: '20%'
} 


function Selector() {

     const [countieslist , setcontrieslist] = useState ([]);


    useEffect ( () => 
    { 
      const getcountries = async ()=> 
      {
          setcontrieslist(await fetchCountries );
      }
     
      getcountries();
      console.log(countieslist);
     } , [setcontrieslist]) ;


    return (
        <FormControl style={StyleSelector}>
            <NativeSelect >
                <option style={{padding:'10px'}} value=''>Global</option>
                {countieslist.map( (country , i ) =>  <option key={i}  value={country}>{country}</option> ) }
            </NativeSelect>
        </FormControl>
    )
}

export default Selector
