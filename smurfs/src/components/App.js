import React, {useState, useEffect} from "react";
import "./App.css";
import Smurf from './Smurf';
import {SmurfContext} from '../contexts/SmurfContext'; // context object to use the goodies that comes with it (Provider, value)
import axios from 'axios'; // using axios to get response
import SmurfForm from "./SmurfForm";

function App () {

  //useState Hook to set state
  const [smurfs, setSmurfs] = useState();

  //useEffect hook to get API request going
  useEffect(() =>{
    axios.get( `http://localhost:3333/smurfs`)
    .then(response =>{
      console.log(response.data)
      setSmurfs(response.data)

    }) // end of then
    .catch(error => 
      {console.log(error)
    })// end of catch

  },[])// end of hook

  return(
    // SmurfContext Provider needs to wrap our component and set the value so I can then pass it later to other components
    <SmurfContext.Provider values= {{smurfs, setSmurfs}}>
      <div className="App">
        <h1>SMURFS! 2.0 W/ ContextAPI</h1>
        <Smurf />
        <SmurfForm />
  </div>
    </SmurfContext.Provider>
    
  )// end of return
}// end of function APP

export default App;

