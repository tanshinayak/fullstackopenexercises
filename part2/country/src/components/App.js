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
   <HandleCountry list={filter}></HandleCountry>
    </div>
)
}
const ShowCountry=({country})=>{
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
          </div>
    )
}
const handleShow=(c)=>{
    return (
        <ShowCountry country={c}></ShowCountry>
    )
}
const HandleCountry=({list})=>{
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
                {list.map(c=><li>{c.name}<button onClick={()=>handleShow(c)}>Show</button></li>)}
            </ul>
        )
    }
    else if(list.length===1){
        return(
           <ShowCountry country={list[0]}></ShowCountry>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

export default App