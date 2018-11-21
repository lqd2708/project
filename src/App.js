import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Api from './Api';

class App extends Component {

    state = {
        characters: [
        ]
    };

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    removeCharacter = index => {
        const { characters } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            })
        });
    }

    render() {
        return (
            <div className="Container">
                <Table 
                    characterData={this.state.characters} 
                    removeCharacter={this.removeCharacter}
                />
                <Form 
                    handleSubmit={this.handleSubmit}
                />
                <Api />
            </div>
        );
    }
}

export default App;