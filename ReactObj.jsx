import React, { useState } from 'react'

const ReactObj = () => {
  let [workinfo, setWorkInfo] = useState({
    title: "",
    discription: ""
  });
const handleChange=(e)=>{
  setWorkInfo({...workinfo,[e.target.name]:e.target.value})
}
const[info,setInfo] = useState([])

const handleSubmit=(e)=>{
  e.preventDefault();
  setInfo([...info,workinfo]);
  setWorkInfo({title:"",discription:""})
}
  return (
    <>
      <h3>lets work with object in react </h3>
      <h4>We will make to do list with work title</h4>
      <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={workinfo.title} type="text" name="title" placeholder="work title" />
      <input onChange={handleChange} value={workinfo.discription} type="text" name="discription" placeholder="work discription" />
     <button type='submit'>Go</button>
      </form>
      { 
        info.map((event,index)=>{
          if(event.title == "" || event.discription == ""){
            return null
          }else{
            return <div className='Todo' key={index}>
            <h2>Work Title is : {event.title}</h2>
            <h2>discription is - {event.discription}</h2>
          </div>
          }
        })
      }
    </>
  )
}

export default ReactObj
