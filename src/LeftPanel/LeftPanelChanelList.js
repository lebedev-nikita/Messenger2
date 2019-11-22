import React from 'react';
import './LeftPanel.css';
import store_messages from '../MiddlePanel/Store.js'
import TopNameStore from '../MiddlePanel/MiddleTopStore.js'
import leftpanel_store from './leftpanel_store.js'
import { connect } from 'react-redux'

class ListItem extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state={"st" : props.saw  }
		this.color=this.state.color;
		this.arr = props.it;
		this.some=props.saw;
		this.evhandCl=this.evhandCl.bind(this);
		this.rechange=this.rechange.bind(this);
	}

	evhandCl(event)
	{
		if(this.state.st) {this.setState({"st":0})}
			else {this.setState({"st":1})}		
		event.stopPropagation();
	}

	rechange(i,name,event)
	{
		store_messages.dispatch({ type : 'CHANGE_CHANEL' , id : i})
		TopNameStore.dispatch({type : 'rename' , name : name})
		event.stopPropagation();
	}

	render(){

		if ( (this.arr.values !== "none") && (this.state.st===1)) {
	 		let loc_style={}
		 		loc_style.background=this.arr.color
	 		return(
	 			<div>	
	 				<div className="channelDisplay" style={loc_style}>
	 				 	<div onClick={ this.rechange.bind(this, this.arr.id ,this.arr.name)}>	{this.arr.name} </div> 
	 				 	<button onClick={this.evhandCl} className="channelButton" >▼</button>
	 				 	
	 				</div>
					<ul className="channelUl"> 
						{this.arr.values.map( (i) => (
						<ListItem it={i} saw={0}  />))} 
					</ul>				
	 			</div>
	 		);		
 		}
	 	if ( (this.arr.values !== "none") && (this.state.st===0)) {
	 		let loc_style={}
		 		loc_style.background=this.arr.color	
	 		return(
	 			<div  className="channelDisplay" style={loc_style}>
	 				<div onClick={ this.rechange.bind(this, this.arr.id,this.arr.name)}>	{this.arr.name} </div>
	 			<button onClick={this.evhandCl} className="channelButton">▶</button>
	 			</div> // if subchannels close
	 		);		
	 	} 

	 	if ( this.arr.values === "none") {
	 		let loc_style={}
		 		loc_style.background=this.arr.color
	 		return(
	 		<div  className="channelDisplay" style={loc_style} > 
	 			<div onClick={ this.rechange.bind(this, this.arr.id,this.arr.name)}>
	 				 {this.arr.name} 
	 			</div>  
	 		</div> 
	 		);
		}
	}
} 

class LeftPanelChannel extends React.Component {
	
	render(){
		return(
			<div className="LeftPanelChannels">
  			{
  				leftpanel_store.getState().data.map( (i) => {
  					return(
  					<div>
  							<ListItem it={i} saw={0} />
  					</div>);}
  					)
  			} 
			</div>
		);
	}
}

const mapStateToProps = (store) => ({ nAr : store});
export default connect(mapStateToProps)(LeftPanelChannel)