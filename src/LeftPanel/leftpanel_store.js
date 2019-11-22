import React from 'react';
import { createStore } from 'redux'
import dataJSON from './data.json'

let leftpanel_store = createStore(inthenameofgod,{ data : dataJSON , find_text : '...' });

function inthenameofgod(state, action) {
  switch (action.type) {
    case 'UPDATE':
    // Должна быть выгрузка на сервер
    return state
    case 'CHANGE_FT':
    	let nw = state;
    	nw.find_text=action.find_text
    	//console.log(nw.find_text);
    return nw	
    default:
      return state
  }
}

export default leftpanel_store