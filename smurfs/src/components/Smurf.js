import React, {useContext} from 'react';
import SmurfCard from './SmurfCard';
import {SmurfContext} from '../contexts/SmurfContext';

function Smurf(){

    const smurfs = useContext(SmurfContext);

    return(
        <div>
           {smurfs && smurfs.map(smurf => (
				<SmurfCard
					key={smurf.id}
					smurf = {smurf}
				/>
           ))}
            <button>I need to add or delete here</button>
        </div>
    )
}

export default Smurf;

