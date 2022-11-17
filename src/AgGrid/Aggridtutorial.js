import {react, useEffect, useState} from 'react'
import axios  from 'axios'


function Aggidtutorial() {

  const [mydata,setmydata]=useState([]);
  const [cCountry,setcCountry]=useState('');
    useEffect(()=>{

          axios.get('https://restcountries.com/v2/all')
          .then((response)=>{
            setmydata(response.data
                );

                console.log(response.data)
          })
    },[])

    return (
     <>

    
        {
              mydata.map((i,j)=>{

                <p>{j}</p>

              })
              
        
        }
        <table>
          <thead>
            <tr key='ids'>
                   <td>Country</td>
                  <td>Code</td>
                  <td>Calling Code</td>
                  <td>Capital</td>
                  <td>Population</td>
                  <td>Region</td>
                  <td>Subregion</td>
                  <td>Timezones</td>
                  <td>Independent</td>
            </tr>
          </thead>
          <tbody>
            {
              mydata.map((dt)=>{
           
                <tr value={dt.alpha3Code}>
                  <td>{dt.name}</td>
                  <td>{dt.alpha3Code}</td>
                  <td>{dt.callingCodes}</td>
                  <td>{dt.capital}</td>
                  <td>{dt.population}</td>
                  <td>{dt.region}</td>
                  <td>{dt.subregion}</td>
                  <td>{dt.timezones}</td>
                 <td>{dt.independent}</td>
                </tr>
              })
            }
          
          </tbody>
        </table>
     </>
    );
  }
  
  export default Aggidtutorial;
  