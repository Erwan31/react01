import React, { Component } from 'react';

class Header extends React.Component {

    inputChange(event) {
        console.log(event.target.value);
    }

    render(){

        return(
            <header>
                <div
                onClick={()=>{console.log('click')}}>Logo</div>
                <input
                    onChange={(event) => this.inputChange(event)}
                />
            </header>
        )
    };
}

export default Header;