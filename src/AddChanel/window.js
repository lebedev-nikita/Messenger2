import React from 'react';
import './window.css';
import { connect } from 'react-redux'
import windowStore from '../AddChanel/windowStore.js'
import close from './close.png'

function Clock(){
 if(windowStore.getState().switch){ windowStore.dispatch({type : 'OFF'})}
 	else {windowStore.dispatch({type : 'ON'})}	
 	console.log('Help me')	
}

function OpenWindow(props){
	if(props.nAr.switch){
	return( 
	 	<div className='BackEnd' onClick={Clock}>
		 	<div className='test' onClick={Clock} >
		 	<img src={close} onClick={Clock} className='E_N_D'/>
		 	<p className='FormName'> {props.nAr.name} </p> 
		 	</div>
		</div>

	)}
	else{
	return null	
	}	
}

const mapStateToProps = (store) => ({ nAr : store});
export default connect(mapStateToProps)(OpenWindow)
