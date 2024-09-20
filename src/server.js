import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';

/**
 * In reality we need to receive this file via the RPC and then import from there
 * This will need BE input to help resolve this... 
 */
import Widget from './Widget'

const app = express();

/**
 * Mock widget info object
 * This will be passed via RPC
 */
const widgetInfo = {
    name: 'Paul Child!!',
    note: 'This is a client-side rendered widget'
}

// Get dogs
app.get(`/api/dog-image`, async (req, res) => {
    console.log('FETCH!!')
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json(); // Parse the JSON from the response
        res.send(data); // Send the data back to the client
    } catch (error) {
        console.error('Fetch error:', error);
        res.status(500).send({ error: 'Failed to fetch data' }); // Handle errors
    }
});

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