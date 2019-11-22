import React from 'react';
import './MiddlePanel.css';
import plain from './plane.png';
import { Provider } from 'react-redux'
import MiddlePanelChat from './MiddleChat.js'
import MiddlePanelTop  from './MiddleTop.js'
import store_messages from './Store.js'
import TopNameStore   from './MiddleTopStore.js'

class MiddlePanel extends React.Component
{
    render(){         
        return (
            <div className="MiddlePanel">
                <Provider store={TopNameStore}>
                <div className="MiddlePanelHeader">
                <MiddlePanelTop/>
                </div>
                </Provider>
                <Provider store={store_messages}>
                <MiddlePanelChat/>    
                </Provider>            
                <MiddlePanelBottom/>
            </div>
        );
    }   
}

class MiddlePanelBottom extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={"tsize" : "1","color" : "grey", "text" : ""}
        this.evhandler=this.evhandler.bind(this);
        this.evchange=this.evchange.bind(this);
        this.evkey=this.evkey.bind(this);
        this.entdown=this.entdown.bind(this);
        this.handplane=this.handplane.bind(this);
        this.sendMessage = this.sendMessage.bind(this)
        this.Message= {};
    }

    evhandler(event){
        this.setState({"tsize" : "7"});
        this.setState({"color" : "#6C6874"});
    }

    evchange(event){
        this.setState({"tsize" : "7"});
        this.setState({"color" : "#6C6874"});
        this.state.text=event.target.value;
        if (event.target.value.length === 0 ) {this.setState({"color" : "lightgrey"});}
    }

    entdown(event){
        if (!event.shiftKey && event.which === 13) {
    event.preventDefault();}
    }

    sendMessage()
    {
        let currentTime = new Date();
        
        this.Message.text=this.state.text;
        this.Message.time=currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds();
        this.Message.avatar="https://a-static.besthdwallpaper.com/naruto-shippuden-pain-wallpaper-1920x1080-7966_48.jpg";
        this.Message.name="Pain"
        this.Message.type="ADD"

        store_messages.dispatch(this.Message);
    }


    evkey(event){
        if (!event.shiftKey && event.which === 13)
        {    
            if(this.state.text==='\\d'){
                store_messages.dispatch({type : 'DELETE' })
            }
            else{ 
                this.sendMessage()  
            }

            this.setState({"tsize" : "1"});
            this.setState({"text" : ""});
            if (event.target.value.length === 0 ) {this.setState({"color" : "green"});}
        }
    }

    handplane(event){

        this.sendMessage()
        this.setState({"tsize" : "1"});
        this.setState({"text" : ""});
    }

    render(){
        return(
            <div className="MiddlePanelBottom">
                <textarea 
                wrap="on" rows={this.state.tsize}
                placeholder="  Write here ..." value={this.state.text}
                onClick={this.evhandler} onChange={this.evchange}
                onKeyUp={this.evkey} onKeyDown={this.entdown} onScroll={this.evhandler} 
                className="MiddlePanelBottomTextrea"/>
                <img src={plain} alt="Sorry :)" onClick={this.handplane} className="MiddlePanelBottomPlain"  />
            </div>
        );
    }
}




export default MiddlePanel;
