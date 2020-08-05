import React, { Component } from 'react';

class Lifecycles extends Component {

    constructor(props){
        super(props)

        this.state = { name: 'ME'}
        console.log('1 - Constructor');
    }

    static getDerivedStateFromProps(){
        console.log('2 - getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate() {
        console.log( ' x - shouldComponentUpdate');
        return false;
    }

    render() { 
        console.log('3 - render');
        return ( 
            <>
                Lifecycles
                <div onClick={ () => this.setState({name: 'w'})}>Click to change state</div>
            </>
         );
    }

    componentDidMount() {
        console.log('4 - componentDidMount');
    }

    componentWillUnmount(){
        console.log('5 - componentWillUnmount');
    }
}
 
export default Lifecycles;