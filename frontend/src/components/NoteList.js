import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  console.log(props.allNotes)
  return (
    <ul >
      {props.allNotes.map(note => {
        return <NoteItem note={note} key={note.title} onNoteClick={props.onNoteClick} />
      })}
    </ul>
  );
}

export default NoteList;
