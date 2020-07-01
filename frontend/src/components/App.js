import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allNotes: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/notes')
      .then(resp => resp.json())
      .then(data => {
        this.setState({ allNotes: data })
      })
  }

  render() {
    console.log(this.state.allNotes)
    return (
      <div className="app">
        <Header />
        <NoteContainer />
      </div>
    );
  }
}

export default App;
