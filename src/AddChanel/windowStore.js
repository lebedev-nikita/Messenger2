import React from 'react';
import { createStore } from 'redux'

let windowStore = createStore(windowStoreRed,{ switch : 0 , name : 'OveRLorD' });

function windowStoreRed(state, action) {
  switch (action.type) {
    case 'ON':
    return {switch : 1 , name : 'OveRLorD'}

    case 'OFF':   
    return { switch : 0 , name : 'OveRLorD'}

    default:
      return state
  }
}

export default windowStore