import React, { Component } from 'react';

class Header extends React.Component {

    state = {
        title: 'The keyword are: ',
        keywords: ''
    }

    inputChange(event) {
        console.log(event.target.value);

        this.setState({
            keywords: event.target.value
        })
    }

    render(){

        return(
            <header>
                <div
                onClick={()=>{console.log('click')}}>Logo</div>
                <input
                    onChange={(event) => this.inputChange(event)}
                />
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
            </header>
        )
    };
}

export default Header;