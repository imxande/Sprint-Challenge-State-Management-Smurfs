import React, {useEffect} from 'react';
import SmurfCard from './SmurfCard';
import {connect} from 'react-redux';
import {getSmurfs} from '../store/actions';


function Smurf(props){
    console.log(props.smurfs, 'al')
    
useEffect(() =>{
    props.getSmurfs()
},[]) 

    return(
        <div>
           
           { props.smurfs.map(smurf => (
				<SmurfCard
					key={smurf.id}
					smurf = {smurf}
				/>
           ))}
            <button>I need to add or delete here</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}


export default connect(mapStateToProps, {getSmurfs}) (Smurf);

