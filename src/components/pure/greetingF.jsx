import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {

    const [age, setAge] = useState(29);
    const birthday = () => {
        setAge(age + 1 );
    }
    return (
            <div>
             <p>{props.name} functional component</p>
             <p>sssss {age}</p>
             <div><button onClick={birthday}>test</button></div>
            </div>
    );
};


GreetingF.propTypes = {
    name: PropTypes.string
};


export default GreetingF;
