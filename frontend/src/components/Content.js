import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

class Content extends Component {

  renderContent = (note) => {
    if (this.props.renderEdit) {
      return <NoteEditor
        note={note}
        handleNoteTitleChange={this.props.handleNoteTitleChange}
        handleNoteBodyChange={this.props.handleNoteBodyChange}
        cancelNoteEdit={this.props.cancelNoteEdit}
        handleNoteSave={this.props.handleNoteSave}
      />;
    } else if (note) {
      return <NoteViewer note={note} handleNoteEdit={this.props.handleNoteEdit} />;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent(this.props.note)}
      </div>
    );
  }
}

export default Content;
