import React from 'react';
import { createStore } from 'redux'

let windowStore = createStore(windowStoreRed,{ switch : 0 , form : { name : 'New Name'} });

function windowStoreRed(state, action) {
  switch (action.type) {
    case 'ON':
    return {switch : 1 , form : state.form}

    case 'OFF':   
    return { switch : 0 , form : state.form}

    default:
      return state
  }
}

export default windowStore