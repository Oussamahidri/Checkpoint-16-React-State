import React from 'react';
import './App.css';
import Person from './Components/Person.js';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Person/> 
            </div>
        );
    }
}

export default App;

