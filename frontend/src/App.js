import { React, useState } from "react";
import axios from 'axios';

function App() {

  const [input, setInput] = useState({
    email: "",
    password: ""
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setInput(prevInput => {
      return {
        ...prevInput,
        [name]:value
      }
    })
  }

  function handleClick(event) {
    event.preventDefault();
    console.log(input)
    const newUser = {
      email: input.email,
      password: input.password
    }
    axios.post("http://localhost:3001/create", newUser);
  }

  return (
    <div className='container'>
      <h1>User Page</h1>
      <form>
        <div className="form-group">
        <label className="form-label">Email</label>
          <input onChange={handleChange} type="email" name="email" value={input.email} className="form-control"  placeholder="Enter email"></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input onChange={handleChange} type="password" name="password" value={input.password} className="form-control" placeholder="Password"></input>
        </div>
        <button onClick={handleClick}>Submit</button>
        </form>
    </div>
  );
}

export default App;
