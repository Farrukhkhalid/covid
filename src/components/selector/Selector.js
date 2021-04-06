import {useState , useEffect} from 'react'
import {NativeSelect , FormControl} from '@material-ui/core'
import { fetchCountries } from './../../api/Api'

const StyleSelector= {
    justifycontent: 'center',
    width: '20%'
} 


function Selector({data , changeHandler}) {

     const countries = data ;


 


    return (
        <FormControl style={StyleSelector}>
            <NativeSelect onChange={(e) => changeHandler(e.target.value)}>
                <option value=''>Global</option>
                {countries.map( (country , i ) =>  <option key={i}  value={country}>{country}</option> ) }
            </NativeSelect>
        </FormControl>
    )
}

export default Selector
