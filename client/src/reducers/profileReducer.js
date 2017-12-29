import { FETCH_PROFILE, SUBMIT_INFLOW, DELETE_INFLOW, SUBMIT_OUTFLOW, DELETE_OUTFLOW } from '../actions/types';

export default function(state = null, action) {
    switch (action.type) {

        case FETCH_PROFILE: 
            return action.payload || false;

        case SUBMIT_INFLOW: 
                return Object.assign({}, state, {
                net_income: state.net_income + action.payload.amount
            })
            

        case DELETE_INFLOW: 
            return Object.assign({}, state, {
                net_income: state.net_income - action.payload.amount
            })

        case SUBMIT_OUTFLOW: 
            return Object.assign({}, state, {
                net_income: state.net_income - action.payload.amount
            })

        case DELETE_OUTFLOW: 
            return Object.assign({}, state, {
                net_income: state.net_income + action.payload.amount
            })

        default: 
            return state;
    }
}