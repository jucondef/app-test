import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {


    constructor(props){
        super(props);
        this.state = {
            age:29
        }
    }

    render() {
        return (
            <div>
             <p>{this.props.name}</p>
             <p>sssss {this.state.age}</p>
             <div><button onClick={this.birthday}>test</button></div>
            </div>
        );
    }

    birthday = () =>{
        this.setState(prevState => 
            (
                {
                    age: prevState.age +1
                }
            )
        );
    }
}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
