import React from 'react';
import { createStore } from 'redux'
import store_messages from './Store.js'



const max_size = 3
const initial_view = []

let store_view=createStore(view_func,initial_view)

function view_func(state,action)
{
	switch (action.type) {
    case 'UD':
    	if( store_messages.getState().length <= max_size) {return store_messages.getState()}
    	else {let ne=store_messages.getState();return ne }	
    return      
    default:
      return state
  }
}

function update()
{
	store_view.dispatch({type:'UD'});
}

store_messages.subscribe(update);

export default store_view;