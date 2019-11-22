import React from 'react';
import { createStore } from 'redux'
import store_messages from './Store.js'

const initialTopName = 'Hello, World!!!'
let TopNameStore = createStore(changeName,{ name : initialTopName , count : 0});

function changeName(state, action) {
  switch (action.type) {
    case 'rename':
    return { name : action.name , count : state.count}
    case 'recount':
    return { name : state.name , count : action.count}
    default:
      return state
  }
}

function up_count(){
	TopNameStore.dispatch( {type:'recount', count : store_messages.getState().length} )
}

store_messages.subscribe( up_count)

export default TopNameStore