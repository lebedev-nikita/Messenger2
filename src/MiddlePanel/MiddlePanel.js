import React from 'react';
import './MiddlePanel.css';
import plain from './plane.png';

class MiddlePanel extends React.Component
{
    render(){
        return (
            <div className="MiddlePanel">
                <div className="MiddlePanelHeader"></div>
                <div className="MiddlePanelChat">
                    <Message text="Hello" time="12:14:31" name="Nikita" avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" />
                    <Message text="Hello" time="12:14:31" name="Nikita" avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" />
                    <Message text="Hello" time="12:14:31" name="Nikita" avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" />
                    <Message text="Hello" time="12:14:31" name="Nikita" avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" />
                    <Message text="Hello" time="12:14:31" name="Nikita" avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" />
                    <Message text="Hello" time="12:14:31" name="Nikita" avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" />
                    <Message text="Hello" time="12:14:31" name="Nikita" avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" />
                    <Message text="Hello" time="12:14:31" name="Nikita" avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" />
                    <Message text="Hello" time="12:14:31" name="Nikita" avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" />
                    <Message text="Hello" time="12:14:31" name="Nikita" avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" />
                    <Message text="Hello" time="12:14:31" name="Nikita" avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" />
                    <Message text="Hello" time="12:14:31" name="Nikita" avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" />
                    <Message text="Hello" time="12:14:31" name="Nikita" avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" />
                    <Message text="Hello" time="12:14:31" name="Nikita" avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" />
                    <Message text="Hello" time="12:14:31" name="Nikita" avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" />
                    <Message text="Hello" time="12:14:31" name="Nikita" avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" />
                    <Message text="Hello" time="12:14:31" name="Nikita" avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" />
                    <Message text="Hello" time="12:14:31" name="Nikita" avatar="https://sun1-24.userapi.com/c851136/v851136437/1bb2dd/Gyr0tYE0Ehg.jpg?ava=1" />
                </div>            
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

    evkey(event){
        if (!event.shiftKey && event.which === 13){
            this.setState({"tsize" : "1"});
            this.setState({"text" : ""});
            if (event.target.value.length === 0 ) {this.setState({"color" : "lightgrey"});}
        }
    }

    handplane(event){
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









class Message extends React.Component
{
    constructor(props)
    {
        super(props);
        this.avatar = this.props.avatar;
        this.name = this.props.name;
        this.time = this.props.time;
        this.text = this.props.text;
    }
    render(){
        return(
            <div className="Message">
                <div className="MessageHeader">
                    <img src={this.avatar} className="MessageAvatar" />
                    <div className="NameAndDate">
                        <p className="MessageUserName">{this.name}</p>
                        <p className="MessageTime">{this.time}</p>
                    </div>
                </div>
                <div> {this.text} </div>
            </div>
        );
    }
}

export default MiddlePanel;
