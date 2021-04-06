import {useState , useEffect} from 'react'
import {NativeSelect , FormControl} from '@material-ui/core'
import { fetchCountries } from './../../api/Api'

const StyleSelector= {
    justifycontent: 'center',
    width: '20%'
} 


function Selector({data}) {

     const countries = data ;

     console.log(countries);
 


    return (
        <FormControl style={StyleSelector}>
            <NativeSelect >
                <option value=''>Global</option>
                {countries.map( (country , i ) =>  <option key={i}  value={country}>{country}</option> ) }
            </NativeSelect>
        </FormControl>
    )
}

export default Selector
