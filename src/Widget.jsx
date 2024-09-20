import React from 'react';
import Note from './Note';

function Widget({name, note}) {
  return (
    <div>
      <Note note={note} name={name} />
    </div>
  );
}

export default Widget;