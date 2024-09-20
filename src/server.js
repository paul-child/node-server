import express from 'express';
import React from 'react';

import ReactDOMServer, {
  renderToStaticMarkup, 
  renderToString,
  renderToPipeableStream
} from 'react-dom/server';

import fs from 'fs';

/**
 * In reality we need to receive this file via the RPC and then import from there
 * This will need BE input to help resolve this... 
 */
import Widget from './Widget'
import { widgetInfo } from './data/widgetInfo';

const app = express();

app.use(express.static(__dirname));

app.get('/build-html', (req, res) => {
    // // Render the Note component to static HTML
    // const html = renderToString(
    //     React.createElement(Widget, { ...widgetInfo })
    // );

    // // Write the HTML output to a file
    // fs.writeFileSync('dist/output.html', html);

    // // Send the HTML back in the response
    // res.send(html);

    const { pipe } = renderToPipeableStream(
        <div id="root">
            <Widget { ...widgetInfo } />
        </div>, {
            bootstrapScripts: ['/bundle.js'],
            onShellReady() {
                res.setHeader('content-type', 'text/html');
                pipe(res);
            }
        }
    );
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});