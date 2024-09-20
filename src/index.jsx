import React from 'react';
import ReactDOM from 'react-dom';
import Note from './Note';

function App() {
  return (
    <div>
      <Note note="This is a client-side rendered note." name="Alice Doe" />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));