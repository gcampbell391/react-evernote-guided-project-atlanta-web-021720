import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

class Content extends Component {
  renderContent = (note) => {
    if (false) {
      return <NoteEditor />;
    } else if (note) {
      return <NoteViewer note={note} />;
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
