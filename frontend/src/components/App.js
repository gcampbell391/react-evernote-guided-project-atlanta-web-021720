import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';


class App extends Component {
  constructor() {
    super()
    this.state = {
      allNotes: [],
      note: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/notes')
      .then(resp => resp.json())
      .then(data => {
        this.setState({ allNotes: data })
      })
  }

  onNoteClick = (note) => {
    this.setState({ note: note })
  }

  render() {
    console.log(this.state.note)
    return (
      <div className="app">
        <Header />
        <NoteContainer allNotes={this.state.allNotes} onNoteClick={this.onNoteClick} note={this.state.note} />
      </div>
    );
  }
}

export default App;
