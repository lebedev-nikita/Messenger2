import React from 'react';
import './LeftPanel.css';
import myimage from './cat.png'
import plus    from './plus.png'
import dataJSON from './data.json'
import store_messages from '../MiddlePanel/Store.js'
import TopNameStore from '../MiddlePanel/MiddleTopStore.js'
import leftpanel_store from './leftpanel_store.js'
import { Provider } from 'react-redux'
import LeftPanelChannel from './LeftPanelChanelList.js'

class LeftPanel extends React.Component
{
	render(){
		leftpanel_store.dispatch({type : 'F_COLOR'}) // Красим древесину
		return (
			<div className="LeftPanel">
				<LeftPanelHeader/>
				<Provider store={leftpanel_store}>
				<LeftPanelChannel/>
				</Provider>
				<LeftPanelBottom  finder={this.change_text}/>
			</div>
		);
	}	
}

class LeftPanelHeader extends React.Component
{
	render(){
		return(
			<div className="LeftPanelHeader">	
				<a href="https://github.com/lebedev-nikita/Messenger2.git" target="_blank" >	<img src={myimage} className="logo" alt="Sorry" /> </a>
			<h6 className="LeftPanelName"> КвазиSlack</h6>
			<LeftPanelAddchannel/>
			</div>
		);
	}
}

class LeftPanelAddchannel extends React.Component //this function must open window for adding channel
{
	constructor(props)
	{
		super(props)
		this.state = {"open" : 0}
		this.OpenWindow=this.OpenWindow.bind(this)
	}

	OpenWindow(event){
		if(this.state.open){this.setState({"open" : 0})}
			else {this.setState({"open":1})}
	}

	render(){
		return(
		<div>
			<img src={plus} className="LeftPanelPlus" alt="Sorry" onClick={this.OpenWindow} /> 
		</div>
		);
							
	}
}

class LeftPanelBottom extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state={"tsize" : "1", "color" : "#5B7FA7"}
		this.evhandler=this.evhandler.bind(this);
		this.evchange=this.evchange.bind(this);
		this.evkey=this.evkey.bind(this);
		this.entdown=this.entdown.bind(this);
	}

	evhandler(event){
		this.setState({"tsize" : "5"});
		this.setState({"color" : "#D0AA76"});
	}

	evchange(event){
		this.setState({"tsize" : "5"});
		this.setState({"color" : "#D0AA76"});
		if (event.target.value.length === 0 ) {this.setState({"color" : "#5B7FA7"});}
	}

	entdown(event){
		if (!event.shiftKey && event.which === 13) {
    event.preventDefault();}
	}

	evkey(event){
		if (!event.shiftKey && event.which === 13){
			this.setState({"tsize" : "1"});
			leftpanel_store.dispatch({type : 'CHANGE_FT' , find_text : event.target.value})
			if (event.target.value.length === 0 ) {
				this.setState({"color" : "#5B7FA7"}); 
				leftpanel_store.dispatch({type : 'CHANGE_FT' , find_text : '...'})
			}
		}
	}

	render(){
		let styles={};
		styles.background = this.state.color;
		return(
			<div className="LeftPanelBottom" style = {styles}>	
				<textarea placeholder="🔍 find channel"
				wrap="on" rows={this.state.tsize} onClick={this.evhandler} onChange={this.evchange}
				onKeyUp={this.evkey} onKeyDown={this.entdown} onScroll={this.evhandler} 
				className="LeftPanelBottomTextarea">  
				</textarea>
			</div>
		);
	}
}





export default LeftPanel;
