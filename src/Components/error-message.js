import React, { Component } from 'react';


class ErrorMessage extends Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log("error")
        return (
            <div>
               <p>Oh no, this recipe does not exist! {this.props.message}</p>
            </div>
        )
    }
}

export default ErrorMessage;
