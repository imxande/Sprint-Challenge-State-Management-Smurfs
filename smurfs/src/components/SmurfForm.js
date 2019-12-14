import React, {useState} from 'react';
import {postSmurfs} from '../store/actions';
import {connect} from 'react-redux';

function SmurfForm(props){
const [name, setName] = useState('')
const [age, setAge] = useState('')
const [height, setHeight] = useState('')



    return(
        <div>
             <label htmlFor = 'finput'>This is The Smurf Form</label>
                <form className="smurf-form" onSubmit = {() => props.postSmurfs({name,age,height})}> 
                    Name: 
                    <input type = 'text' name = 'name' onChange = {(event) => setName(event.target.value)} value = {name} />
                    Age:
                    <input type = 'text' name = 'age'  onChange = {(event) => setAge(event.target.value)} value = {age} />
                    Height:
                    <input type = 'text' name = 'height'  onChange = {(event) => setHeight(event.target.value)} value = {height} />
                    <button type = 'submit' >Add Something here</button>
                </form>
        </div>
       
    )
}

export default connect('', {postSmurfs}) (SmurfForm);