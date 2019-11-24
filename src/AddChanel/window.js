import React from 'react';
import './window.css';
import { connect } from 'react-redux'
import windowStore from '../AddChanel/windowStore.js'
import close from './close.png'
import TextField from '@material-ui/core/TextField';


function Clock(event){
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
		 	<div className='OneText'>
		 	 <TextField id="filled-basic" label="Channel Name" variant="filled" helperText='Input new channel name'
		 	 fullWidth
		 	  />
		 	</div>
		 	<p> {props.nAr.form.name} </p> 
		 	</div>
		</div>

	)}
	else{
	return null	
	}	
}

const mapStateToProps = (store) => ({ nAr : store});
export default connect(mapStateToProps)(OpenWindow)
