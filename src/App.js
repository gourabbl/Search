import React from 'react';
import JSONDATA from "./MOCK_DATA.json"
import { useState } from 'react';
import './index.css';

function App() {

  const [searchItems, setSearchItems] = useState("")

  
  return (
    <div className='App'>
    
     <input type="text" placeholder='search...' onChange={(event)=>{
      setSearchItems(event.target.value)
     }}/>

     {JSONDATA.filter((val)=>{
      if (searchItems == ''){
        return val
      } else {
        return ( val.first_name.toLowerCase().includes(searchItems.toLowerCase()) )
      }
     }).map((val)=>{
      return <p>{val.first_name}</p>
     })}

    </div>
  )
}


export default App;
