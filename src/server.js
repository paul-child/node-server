require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react']
});

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');

// Import your React component
const Note = require('./Note').default; // Assuming default export

const app = express();

app.get('/build-html', (req, res) => {
  // Render the Note component to static HTML
  const html = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Note, { note: "This is a server-side note.", name: "Bob Smith" })
  );

  // Write the HTML output to a file
  fs.writeFileSync('output.html', html);

  // Send the HTML back in the response
  res.send(html);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});