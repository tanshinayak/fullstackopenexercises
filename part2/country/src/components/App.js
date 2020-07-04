import React,{useState,useEffect} from 'react'
import axios from 'axios'
const App=()=>{
const [search,setSearch]=useState('')
const [filter,setFilter]=useState([])
const [countries,setCountries]=useState([])
const handleSearch=(event)=>{
    setSearch(event.target.value)
}
useEffect(()=>{
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response=>setCountries(response.data))
})
useEffect(()=>{
    if(search==='')
    {
        setFilter([])
    }
    else{
        setFilter(
            countries.filter(
                (country)=>country.name.toLowerCase().includes(search.toLowerCase())))
    }
},[countries,search])
return (
    <div>
    find the countries <input type="text" value={search} onChange={handleSearch}/>
   <ShowCountry country={filter}></ShowCountry>
    </div>
)
}
const ShowCountry=({country})=>{
    if(country.length>10)
    {
        return(
            <p>Too many matches, specify anouther filter</p>
        )
    }
    else if(country.length<10&&country.length>1)
    {
        return(
            <ul>
                {country.map(c=><li>{c.name}</li>)}
            </ul>
        )
    }
    else if(country.length===1){
        return(
            <div>
            <h1>{country[0].name}</h1>
            <p>Capital : {country[0].capital}</p>
            <p>Population : {country[0].population}</p>
            <h3>Languages</h3>
            {country[0].languages.map((language) => (
              <li>{language.name}</li>
            ))}
            <br />
            <img src={country[0].flag} alt="Flag" width="100px" />
          </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

export default App