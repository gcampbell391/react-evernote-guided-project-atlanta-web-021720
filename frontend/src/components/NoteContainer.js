import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {


  render() {
    return (
      <Fragment>
        <Search handleSearchChange={this.props.handleSearchChange} searchTerm={this.props.searchTerm} />
        <div className='container'>
          <Sidebar
            allNotes={this.props.allNotes}
            onNoteClick={this.props.onNoteClick}
            handleNewNote={this.props.handleNewNote}
            searchTerm={this.props.searchTerm}
          />
          <Content
            note={this.props.note}
            renderEdit={this.props.renderEdit}
            handleNoteEdit={this.props.handleNoteEdit}
            handleNoteTitleChange={this.props.handleNoteTitleChange}
            handleNoteBodyChange={this.props.handleNoteBodyChange}
            cancelNoteEdit={this.props.cancelNoteEdit}
            handleNoteSave={this.props.handleNoteSave}
          />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
