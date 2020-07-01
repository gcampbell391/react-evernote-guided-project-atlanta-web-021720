import React from 'react';

const NoteItem = (props) => (
  <li onClick={() => props.onNoteClick(props.note)}>
    <h2>{props.note.title}</h2>
    <p className="noteBody">{props.note.body}</p>
  </li>
);

export default NoteItem;
