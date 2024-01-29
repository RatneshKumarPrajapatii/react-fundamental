import { useState } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = () => {
    setData([...data, todo]);
    setTodo("");
  };

  const removeActivity = (index) => {
    const updatedData = data.filter((ele, id) => {
      return index !== id;
    });
    setData(updatedData);
  };
  const handleRemoveAll = () => {
    setData("")
  }
  return (
    <>
      <h1>Lets do curd operation with react</h1>
      <input type="text" onChange={handleChange} value={todo} placeholder="Enter Name" />
      <button type='button' onClick={handleSubmit}>Click Me</button>
      {
        data == ""
          ?
          <p>No data exist</p>
          :
          data.map((value, index) => {
            return (
              <div key={index}>
                <h2>{value}</h2>
                <button onClick={() => removeActivity(index)}>Delete</button> {/* Pass a function reference */}
              </div>
            );
          })
      }
      {
        data == ""
          ?
          null
          :
          <div>
            <button onClick={handleRemoveAll}>Remove All</button>
          </div>
      }


    </>
  );
}

export default App;
