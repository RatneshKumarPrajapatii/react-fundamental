import { useState } from 'react'
import './App.css'

function App() {
  const[name,setName] = useState("");
  const [info,setInfo] = useState([]);
  const handleChange = (event) =>{
    setName(event.target.value);
    console.log(name);
  }
  const handleClick =()=>{
    if(name === ""){
      return alert("you did not given any input")
    }else{
      
    setInfo([...info,name]);
    setName("")
    }
  }
  return (
    <>
    <h2>lets buits a pro which show name all input values</h2>
    <input type="text" value={name} onChange={handleChange}/>
    <button onClick={handleClick}>Click Me</button>
    {
      info.map((names,index)=>{
       return <li key={index}>{names}</li>
      })
    }
    </>
  )
}

export default App
