import React from 'react';
import './LeftPanel.css';
import myimage from './cat.png'
import plus    from './plus.png'
import dataJSON from './data.json'
import store_messages from '../MiddlePanel/Store.js'


class LeftPanel extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state={"Find_txt" : "_"}
		this.change_text=this.change_text.bind(this)
		this.magick="_"
	}

	change_text(text)
	{
		this.setState({"Find_txt" : text});
		this.magick=text;
	}

	render(){
		return (
			<div className="LeftPanel">
				<LeftPanelHeader/>
				<LeftPanelChannel  finder={this.magick}/>
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
		this.state={"tsize" : "1", "color" : "#5B7FA7" , "Find_text" : "_"}
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
			this.props.finder(event.target.value);
			if (event.target.value.length === 0 ) {this.setState({"color" : "#5B7FA7"}); 
						this.props.finder("_");}
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

class ListItem extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state={"st" : props.saw ,"color" : "#A2A2D0" , "ccolor": "#E6E6FA" , "already_color" : 0 }
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

	rechange(i,event)
	{
		store_messages.dispatch({ type : 'CHANGE_CHANEL' , id : i})
		event.stopPropagation();
	}

	render(){

		if ( (this.arr.values !== "none") && (this.state.st===1)) {
	 		let loc_style={}
		 		loc_style.background=this.arr.color
	 		return(
	 			<div>	
	 				<div className="channelDisplay" style={loc_style}>
	 				 	<div onClick={ this.rechange.bind(this, this.arr.id)}>	{this.arr.name} </div> 
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
	 				<div onClick={ this.rechange.bind(this, this.arr.id)}>	{this.arr.name} </div>
	 			<button onClick={this.evhandCl} className="channelButton">▶</button>
	 			 
	 			</div> // if subchannels close
	 		);		
	 	} 

	 	if ( this.arr.values === "none") {
	 		let loc_style={}
		 		loc_style.background=this.arr.color
	 		return(
	 		<div  className="channelDisplay" style={loc_style} > <div onClick={ this.rechange.bind(this, this.arr.id)}>	 {this.arr.name} </div>  </div> 
	 		);
		}
	}
} 


class LeftPanelChannelConfig extends React.Component
{
	constructor(props)
	{
		super(props)
		this.state={"check" : 1}
		this.color="#A2A2D0";
	}
	render(){
		let str = {mycolor:this.color , chcolor : this.changeColor }
		return(
		<div>
			<ListItem it={this.props.it} saw={this.props.saw} finder={this.props.finder} cc={this.color}/>
		</div>
		);
	}
}

class LeftPanelChannel extends React.Component {
	
	constructor(props)
	{
		super(props)
		this.state={"check" : 1}
		this.evhandClick=this.evhandClick.bind(this);
		this.changeColor=this.changeColor.bind(this);
	
	}

	evhandClick(props)
	{
		if (this.state.check) {this.setState({"check":0})}
		else {this.setState({"check":1})}
	}

	changeColor(Color)
	{
		this.myColor="red"
	}

	render(){
		find_text=this.props.finder
		dataJSON.map( (i) => {  rjson({i})}  )
		return(
			<div className="LeftPanelChannels">
			
  			{
  				dataJSON.map( (i) => {
  					return(
  					<div>
  							<LeftPanelChannelConfig it={i} saw={0} />
  					</div>);}
  					)
  			} 
			</div>
		);
	}
}

let flash=0
let find_text="_"
let deep= []

function rjson(props)
{
	props.i.color="#D6E2F5"
	deep.push(props.i.id);
	if (props.i.values!=="none") {props.i.values.map( (i) => { rjson({i})}  )}
	if(props.i.name.toUpperCase().indexOf(find_text.toUpperCase()) !== -1 ) {paint(); }		
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

/*
* Идея номируем каждую вершину как группу 
* Строим маршрут в Массиве
* Проходи и красим
* 
* 
*/

export default LeftPanel;
