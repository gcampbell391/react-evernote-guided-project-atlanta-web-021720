import React, { Component } from 'react';

class NoteEditor extends Component {
  render() {
    return (
      <form className="note-editor" onSubmit={(e) => this.props.handleNoteSave(e)}>
        <input type="text" name="title" value={this.props.note.title} onChange={(e) => this.props.handleNoteTitleChange(e)} />
        <textarea name="body" value={this.props.note.body} onChange={(e) => this.props.handleNoteBodyChange(e)} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={(e) => this.props.cancelNoteEdit()}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
