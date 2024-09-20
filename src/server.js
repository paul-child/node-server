require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react']
});

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const fs = require('fs');

// Import your JSX widget
const Widget = require('./Widget').default; // Assuming default export

const app = express();

// Get this from RPC
const widgetInfo = {
    name: 'Paul Child',
    note: 'This is a client-side rendered widget'
}

app.get('/build-html', (req, res) => {
    // Render the Note component to static HTML
    const html = ReactDOMServer.renderToStaticMarkup(
        React.createElement(Widget, { ...widgetInfo })
    );

    // Write the HTML output to a file
    fs.writeFileSync('dist/output.html', html);

    // Send the HTML back in the response
    res.send(html);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});