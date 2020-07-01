import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  console.log('search term: ', props.searchTerm)
  return (
    <ul >
      {props.allNotes.map(note => {
        return note.title.toLowerCase().includes(props.searchTerm) ? <NoteItem note={note} key={note.title} onNoteClick={props.onNoteClick} /> : null
      })}
    </ul>
  );
}

export default NoteList;
