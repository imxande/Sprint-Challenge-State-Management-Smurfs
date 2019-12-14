import axios from 'axios';

export const FETCHING_SMURFS = 'FETCHING_SMURFS';
export const SMURFS_FETCH = 'SMURFS_FETCH';
export const ERROR = 'ERROR';
export const SAVING_SMURFS = 'SAVING_SMURFS';
export const SMURFS_SAVED = 'SMURFS_SAVED';

export const getSmurfs = () => {
   const receiveSmurfs =  axios.get( 'http://localhost:3333/smurfs')

   return (dispatch) => {
     dispatch({type: FETCHING_SMURFS})
    receiveSmurfs
     .then(response =>{
        dispatch({type: SMURFS_FETCH, payload: response.data})

    }) // end of then
    .catch(error => 
         dispatch({type:ERROR, payload: error })
    )// end of catch
   }
}

export const postSmurfs = (obj) => {
    const postSmurfs =  axios.post( 'http://localhost:3333/smurfs', obj )
 
    return (dispatch) => {
      dispatch({type: SAVING_SMURFS})
     postSmurfs
      .then(response =>{
         dispatch({type: SMURFS_SAVED, payload: response.data})
 
     }) // end of then
     .catch(error => 
          dispatch({type:ERROR, payload: error })
     )// end of catch
    }
 }