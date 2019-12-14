import {FETCHING_SMURFS, SMURFS_FETCH, ERROR, SAVING_SMURFS, SMURFS_SAVED} from '../actions';

const initialState = {
    smurfs: [],
    fetchingSmurfs : false,
    smurfsFetched: false,
    error: false,
    savingSmurfs: false,
    smurfsSaved: false 
}


export const smurfsReducer = ( state = initialState, action) =>{
    switch (action.type){ // this is cooler than if statements
        case FETCHING_SMURFS:
            return {
                ...state, // spreading all the properties
                fetchingSmurfs: true // value is modified
            }
        case SMURFS_FETCH:
            return {
                ...state,
                smurfs: action.payload, // smurfs is not empty anymore
                fetchingSmurfs: false, // letting the componnent know
                smurfsFetched: true
            }
        case ERROR:
            return{
                ...state,
                error: action.payload
            }
        case SAVING_SMURFS:
            return {
                ...state,
                savingSmurfs: true
            }
        case SMURFS_SAVED:
            return{
                smurfs: action.payload,
                ...state,
                savingSmurfs: false,
                smurfsSaved: true
            }
        default:
            return state
    }
}