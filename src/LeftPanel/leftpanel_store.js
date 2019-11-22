import React from 'react';
import { createStore } from 'redux'
import dataJSON from './data.json'

let leftpanel_store = createStore(inthenameofgod,{ data : dataJSON , find_text : '...' });

function inthenameofgod(state, action) {
  switch (action.type) {
    case 'UPDATE':
    // Должна быть выгрузка на сервер
    return state
    case 'F_COLOR':
       let  new_json = state.data
       new_json.map( (i) => {  fcolor({i})}  )
    return { data : new_json , find_text : state.find_text }
    case 'CHANGE_FT':
    	let new_json2 = state.data
    	ftext = action.find_text
    	new_json2.map( (i) => {  rjson({i})}  )
    return { data : new_json2 , find_text : action.find_text }
    default:
      return state
  }
}


let ftext
let flash=0
let deep= []

function fcolor(props)
{
	props.i.color="#D6E2F5"
	if (props.i.values!=="none") {props.i.values.map( (i) => { fcolor({i})}  )}
	props.i.color="#D6E2F5"	
}

function rjson(props)
{
	props.i.color="#D6E2F5"
	deep.push(props.i.id);
	if (props.i.values!=="none") {props.i.values.map( (i) => { rjson({i})}  )}
	if(props.i.name.toUpperCase().indexOf(ftext.toUpperCase()) !== -1 ) {paint(); }		
	flash=deep.indexOf(props.i.id,0)
	if ( flash !== -1) {deep.splice(flash,1)}
}

function paint()
{
	dataJSON.map( (i) => {unpaint({i})}  )
}

function unpaint(props)
{
	if( deep.includes(props.i.id,0) ) {props.i.color="#E1CBAD"}
	if (props.i.values!=="none") {props.i.values.map( (i) => { unpaint({i})}  )}	
}


export default leftpanel_store