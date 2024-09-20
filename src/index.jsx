import React from 'react';
import { hydrateRoot } from 'react-dom/client';

import Widget from './Widget.jsx';
import { widgetInfo } from './data/widgetInfo.js';

const target = document.querySelector('#root');

hydrateRoot(target, <Widget {...widgetInfo} />);