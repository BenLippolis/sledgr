import { FETCH_INFLOWS, DELETE_INFLOW, SUBMIT_INFLOW } from '../actions/types'
import _ from 'lodash'

// State is an empty array
// within this reducer, state refers to inflows
// which is part of the greater application state
export default function (state = [], action) {
  switch (action.type) {
    case FETCH_INFLOWS:
      return action.payload

    case SUBMIT_INFLOW:
      return [
        ...state,
        {
          title: action.payload.title,
          amount: action.payload.amount,
          _id: action.payload._id,
          _user: action.payload._user
        }
      ]

    case DELETE_INFLOW:
      const inflows = state.filter(inflow => inflow._id !== action.payload._id)
      return inflows
    default:
      return state
  }
}
