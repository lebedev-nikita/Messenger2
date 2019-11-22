import React from 'react';
import TopNameStore from './MiddleTopStore.js'
import { connect } from 'react-redux'

function MiddlePanelTop(props){
	return(
		<div>
		<p className="ChanelTopName"> {props.nAr.name} </p>
		<p className="NumberMEssage"> {props.nAr.count} </p>
		</div>
	)
}

const mapStateToProps = (store) => ({ nAr : store});

export default connect(mapStateToProps)(MiddlePanelTop)