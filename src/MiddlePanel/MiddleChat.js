import React from 'react';
import './MiddlePanel.css';
import { connect } from 'react-redux'
import store_messages from './Store.js'

let top_border = 10

class MiddlePanelChat extends React.Component
{
    render(){
        return(
            <div className="MiddlePanelChat">
             {this.props.nAr.map( (i) =>  (<Message text={i.text} avatar={i.avatar} time={i.time} name={i.name}/>)   )}
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

const mapStateToProps = (store) => ({ nAr : store});


export default connect(mapStateToProps)(MiddlePanelChat)