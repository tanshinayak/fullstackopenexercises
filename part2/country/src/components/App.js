import React,{useState,useEffect} from 'react'
import axios from 'axios'
const App=()=>{
const [search,setSearch]=useState('')
const [filter,setFilter]=useState([])
const [countries,setCountries]=useState([])
const[waether,setWeather]=useState(0)
const handleSearch=(event)=>{
    setSearch(event.target.value)
}
const handleShow=(c)=>{
    return (
       setFilter([c])
    )
}
const handleWeather=()=>{
    useEffect(()=>{axios.get('http://api.weatherstack.com/current?access_key=ec04f8fdac25ddf878d0751d17c8bb72&query=delhi')
    .then(response=>{console.log(response.data.current.temperature)
    return(
        <div>
        {console.log(response.data.current.temperature)}
    <p>{response.data.current.temperature} degree celsius</p></div>
    )})
},[])
}
useEffect(()=>{
    axios.get('https://restcountries.eu/rest/v2/all')
    .then(response=>setCountries(response.data))
},[])
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
   <HandleCountry list={filter} handleShow={handleShow} handleWeather={handleWeather}></HandleCountry>
    </div>
)
}
const ShowCountry=({country,handleWeather})=>{
    return(
    <div>
        {console.log(country)}
            <h1>{country.name}</h1>
            <p>Capital : {country.capital}</p>
            <p>Population : {country.population}</p>
            <h3>Languages</h3>
            {country.languages.map((language) => (
        <li>{language.name}</li>
      ))}
            <br />
            <img src={country.flag} alt="Flag" width="100px" />
            <h3>Weather Of {country.capital}</h3>
            {handleWeather}
          </div>
    )
}
const HandleCountry=({list,handleShow,handleWeather})=>{
    if(list.length>10)
    {
        return(
            <p>Too many matches, specify anouther filter</p>
        )
    }
    else if(list.length<10&&list.length>1)
    {
        return(
            <ul>
                {list.map(c=><li>{c.name}<button onClick={()=>{handleShow(c)}}>Show</button></li>)}
            </ul>
        )
    }
    else if(list.length===1){
        return(
           <ShowCountry country={list[0]} handleWeather={handleWeather}></ShowCountry>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}
export default App