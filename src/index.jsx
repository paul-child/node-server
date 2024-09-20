import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note';  // Assuming you save the component as Note.js

ReactDOM.render(
  <Note note="This is a note." name="Bob Smith" />,
  document.getElementById('root')
);