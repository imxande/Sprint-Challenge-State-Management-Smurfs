import React, {useContext} from 'react'
import { SmurfContext } from '../contexts/SmurfContext';

function SmurfCard(props){
    const smurfs = useContext(SmurfContext)
    console.log(props.smurfs)
    return(
        <div>
            <h2> {props.name} </h2>
            <p>Age: {props.age}</p>
            <p>Height: {props.height} </p>
        </div>
    )
}

export default SmurfCard;