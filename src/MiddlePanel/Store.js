import React from 'react';
import { createStore } from 'redux'

const initial_store_messages = []
let store_messages = createStore(travel,initial_store_messages );

function test(i)
{
    return( {time: '12.34.56', name : i ,
                text: 'Понять насколько redux прост, весьма непросто!!!'})
}

function travel(state, action) {
  switch (action.type) {
    case 'ADD':
    delete action.type
    return [...state,action]
    case 'T':     
    return [...state,test()] 
    case 'UPDATE':
        let newAr= action.up_state;
    return newAr;
    case 'DELETE':
    return []
    case 'CHANGE_CHANEL': 
        // Функция для отправки на наш сервер
        //state=[]
        //state.push(test(action.id))
    return [...state]
    default:
      return state
  }
}


export default store_messages