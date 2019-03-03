import React from 'react';

export default class Clock extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            date : new Date()
        }
        
    }

    tick(){
        // this.state.date = new Date();  //this type set state will not work bcz this type assignment will be supported only in constructor
        this.setState({
            date : new Date()
        })
    }

    componentDidMount(){
        this.timerId = setInterval(
            () =>{
                this.tick();
            },
            1000
        );
    }

    componentWillMount(){
        clearInterval(this.timerId);
    }
    

    render(){
        if(!this.props.opendialog){
            return null;
        }
        return (
            <div>
            --------------------------------------
            <a>{this.props.opendialog}</a>
            Timer : {this.state.date.toLocaleTimeString()}
            </div>
        )
    }

}