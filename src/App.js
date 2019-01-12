import React, {Component} from 'react';
import './App.css';
import Person, {Profession} from './Person/Person';
import Radium, {StyleRoot} from 'radium';

class App extends Component {
    state = {
        persons: [
            {id: "qwe", name: "Conrad", age: 40},
            {id: "asd", name: "Norma", age: 35, profession: "Web Developer"},
            {id: "zxc", name: "Cheryl", age: 10},
        ],
        showPersons: false
    };

    switchNameHandler = (newName, event) => {
        this.setState({
            persons: [
                {name: "Cheryl " + newName, age: 50},
                {name: "Norma " + newName, age: 55, profession: "Web Developer"},
                {name: "Conrad " + newName, age: 50}
            ]
        });
    };

    nameChangeHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex( (person) => {
            return person.id === id;
        });

        const person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons
        });
    };

    togglePersonsHandler = () => {
        const isShown = this.state.showPersons;
        this.setState({
            showPersons: !isShown
        });
    };

    deletePersonHandler = (personIndex) => {
        // const persons = this.state.persons;
        // const persons = this.state.persons.slice();
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    render() {
        console.log('App render');

        let persons = null;
        let style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'green'
            }
        };
        let classes = [];


        if (this.state.persons.length<=2) {
            classes.push('red');
            if (this.state.persons.length<=1) {
                classes.push('bold');
            }
        }


        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return (
                            <Person
                                click={() => this.deletePersonHandler(index)}
                                changed={(event) => this.nameChangeHandler(event, person.id)}
                                id={person.id}
                                name={person.name}
                                age={person.age}
                                key={person.id}/>
                        );
                    })}
                </div>
            );

            style.backgroundColor = 'red';
            style[':hover'] = {
                backgroundColor: 'lightred',
                color: 'black'
            };
        }

        return (
            <StyleRoot>
                <div className="App">
                    <h1>Hi, I am React app</h1>
                    <p className={classes.join(' ')}>This is really working</p>
                    <button style={style}
                            onClick={this.togglePersonsHandler}>Toggle Persons</button>
                    {persons}
                </div>
            </StyleRoot>
        );
    };
}

export default Radium(App);
