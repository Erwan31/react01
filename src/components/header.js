import React, { Component } from 'react';

class Header extends React.Component {

    state = {
        title: 'The keyword are: ',
        keywords: '',
        active: false,
    }

    
    /*
    inputChange(event) {
        const value = event.target.value === '' ? false : true;


        this.setState({
            active: value,
            keywords: event.target.value
        })
    }
    */


    render(){

        return(
            <header style={{background: `${this.state.active ? 'red' : 'blue'} `}}>
                <div
                onClick={()=>{console.log('click')}}>Logo</div>
                <input
                    onChange={ this.props.keywords }
                />
                <div>{this.state.title}</div>
                <div>{this.state.keywords}</div>
            </header>
        )
    };
}

export default Header;