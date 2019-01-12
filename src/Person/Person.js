import React from 'react';
import './Person.css';
import Radium from 'radium';

// function getMyAge() {
//     return Math.floor(Math.random() * 30);
// }
//
export const Profession = (props) => {
    return (
        <b>{props.description}</b>
    );
};

const Person = (props) => {
    console.log('Person render');

    const style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}><b>{props.id}</b> I'm a {props.name} and I am {props.age} years old!</p>
            {props.children}
            <br />
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};
export default Radium(Person);