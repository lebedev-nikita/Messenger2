import React from 'react';
import { createStore } from 'redux'
import store_messages from './Store.js'

const max_open_chanel = 3
const limit_array     = 1000
const initial_all_mes = { id : '', mes_array : '' , read_num : '0'}
let store_all_mes=createStore(top_after_top, [] );

function top_after_top(state, action) {
switch (action.type) {  
  case 'UPDATE':
  	let tmp_state = state;
  	let flag_finder = -1;
  	let min_readNum = 100000000;
  	let num_readNum = -1;
  	for (let i = 0; i < tmp_state.length; i++){ 
 		if( tmp_state[i].id === action.id) {flag_finder=i;break;}
		if( tmp_state[i].id < min_readNum) {min_readNum=tmp_state[i].read_num; num_readNum=i;}
	}
	if (flag_finder!==-1)
	{
		tmp_state[flag_finder].mes_array=action.up_state;
		return tmp_state;
	}
  	if(tmp_state.length < max_open_chanel)
  	{ 
  		tmp_state.push({ id : action.id , mes_array : action.up_state, read_num : 0 })
 		for (let i = 0;i < tmp_state.length; i++) {
			tmp_state[i].read_num=0;
		}

 		return tmp_state
 	}
	DO_NOTHING(1); // Здесь необходимо выгрузить массив на сервер
	tmp_state[num_readNum].id = action.id;
	tmp_state[num_readNum].mes_array = action.up_state;
	for (let i = 0;i < max_open_chanel; i++) {
		tmp_state[i].read_num=0;
	}
  return tmp_state
  case 'WRITE':
  let tmp_state2 = state;
  if (tmp_state2.length === 0 )
  {
  	DO_NOTHING(1);
  	tmp_state2[0].id = action.id
  	tmp_state2[0].read_num=0
  	tmp_state2[0].mes_array = []
  	store_messages.dispath({type : 'UPDATE' , up_state : [] })
  }	
  	flag_finder = -1;
  	min_readNum = 100000000;
  	num_readNum = -1;
  	for (let i = 0; i < tmp_state2.length ; i++){ 
 		if( tmp_state[i].id === action.id) {flag_finder=i;break;}
		if( tmp_state[i].id < min_readNum) {min_readNum=tmp_state[i].read_num; num_readNum=i;}
	}
	if (flag_finder !== -1 )
	{
		tmp_state2[flag_finder].read_num=tmp_state2[flag_finder].read_num+1
		store_messages.dispath({type : 'UPDATE' , up_state : tmp_state2[flag_finder].mes_array })
		return tmp_state2
	}
	DO_NOTHING(1) // Здесь необходимо подгрузить с сервера	массив
	tmp_state2[num_readNum].id=action.id;
	tmp_state2[num_readNum].mes_array=[];
	for (let i = 0;i < tmp_state2.length; i++) {
			tmp_state2[i].read_num=0;
		}
  return tmp_state2   
    default:
      return state
  }
}

let null_readNum= (props) => (props.read_num=0);
let in_mesArray = (props,str) => (props.mes_array = str);
let DO_NOTHING  = (i) => (1);
export default store_all_mes