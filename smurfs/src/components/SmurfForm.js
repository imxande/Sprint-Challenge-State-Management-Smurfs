import React from 'react'

function SmurfForm(){
    return(
        <div>
             <label htmlFor = 'finput'>This is The Smurf Form</label>
                <form> 
                    Name: <br/>
                    <input type = 'text' name = 'name'/>
                    Age:
                    <input type = 'text' name = 'age'/>
                    Height:
                    <input type = 'text' name = 'height'/>
                    <button type = 'submit' >Add Something here</button>
                </form>
        </div>
       
    )
}

export default SmurfForm;