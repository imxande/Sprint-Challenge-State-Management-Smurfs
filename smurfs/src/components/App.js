import React from "react";
import "./App.css";
import Smurf from './Smurf';
import SmurfForm from "./SmurfForm";

function App () {

  return(
    
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm /> 
        <Smurf  />
        
  </div>
   
    
  )// end of return
}// end of function APP


export default  App;

