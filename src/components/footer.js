import React, { Component } from 'react';

class Footer extends Component {
    constructor( props ){
        super(props);

        console.log('from footer', this.props);
    }
    
    render() {
        return(
            <footer>
                {this.props.footer}
            </footer>
        )
    }
}

export default Footer;
