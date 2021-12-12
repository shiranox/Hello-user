import React, { useEffect } from 'react';
import {useState} from 'react';
import axios from 'axios';

function App() { 
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === '' || username === '') {
      console.log('Cannot create user without input');
      return;
    }
    const payload = {
      username: username,
      password: password
    };
    axios ({
      url: '/api/save', //where the server is waiting for that request
      method: 'POST', //by default axios is using GET
      data: payload
    })
    .then(() => {
      console.log("Data has been sent to the server");
      resetUserInputs();
    })
    .catch(() => {
      console.log("Internal server error");
    });
  }
  const resetUserInputs = () => {
    setUser('');
    setPassword('');
  };

  /*
  const displayUsers = (users) => {
    if (!users.length){
      return null;
    }
    users.map((user, index) => (
      <div key={index}> 
        <p>{user.username}</p>
        <p>{user.password}</p>

      </div>
    ));
  } 
*/

  useEffect(() => { //componentdidmount
    axios.get('/api')
    .then((response) => {
      const data = response.data;
      console.log("User has been created:");
      console.log(data);
      
    })
    .catch (()=> {
      alert('Error getting  data');
    });
  }, []);

  return (
    <div> 
      <form onSubmit={handleSubmit}>
        <h2> Create a new user </h2>
        <label>
          Name:
          <input
            type="text"
            name="username"
            value={username}
            placeholder='Enter name'
            onChange={(e) => setUser(e.target.value)}/>
        </label>
        <label>
            <br/>  <br/>
          Password:
          <input
            type="text"
            name="Password"
            value={password}
            placeholder='Enter password'
            onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <br/>  <br/>
      
        <button> Submit </button>
      </form>
  
    </div>
    );
}

export default App;
