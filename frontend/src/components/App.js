import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';
import Swal from 'sweetalert2'


class App extends Component {
  constructor() {
    super()
    this.state = {
      allNotes: [],
      note: null,
      renderEdit: false,
      searchTerm: ''
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
    this.setState({ renderEdit: false })
  }

  handleNoteEdit = () => {
    console.log("edit")
    this.setState({ renderEdit: true })
  }

  handleNoteTitleChange = (event) => {
    let newNote = this.state.note
    newNote.title = event.target.value
    this.setState({ note: newNote })
  }

  handleNoteBodyChange = (event) => {
    let newNote = this.state.note
    newNote.body = event.target.value
    this.setState({ note: newNote })
  }

  cancelNoteEdit = () => {
    this.setState({ renderEdit: false })
  }

  handleNoteSave = (event) => {
    event.preventDefault()
    console.log("saved")
    const newNote = this.state.note
    fetch(`http://localhost:3000/api/v1/notes/${newNote.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
    this.setState({ renderEdit: false })
    Swal.fire({
      icon: 'success',
      title: 'Update Complete',
      text: 'The note was updated successfully!',
      timer: '2000'
    })
  }

  handleNewNote = () => {
    const newNote = {
      title: 'New Note',
      body: 'Enter Message Here'
    }
    fetch(`http://localhost:3000/api/v1/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newNote),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({ allNotes: [...this.state.allNotes, data] })
      })
    Swal.fire({
      icon: 'success',
      title: 'New Note Added',
      text: 'The note was created successfully!',
      timer: '1500'
    })
  }

  handleSearchChange = (event) => {
    this.setState({ searchTerm: event.target.value.toLowerCase() })
  }

  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer
          allNotes={this.state.allNotes}
          onNoteClick={this.onNoteClick}
          note={this.state.note}
          handleNoteEdit={this.handleNoteEdit}
          renderEdit={this.state.renderEdit}
          handleNoteTitleChange={this.handleNoteTitleChange}
          handleNoteBodyChange={this.handleNoteBodyChange}
          cancelNoteEdit={this.cancelNoteEdit}
          handleNoteSave={this.handleNoteSave}
          handleNewNote={this.handleNewNote}
          handleSearchChange={this.handleSearchChange}
          searchTerm={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default App;
