import * as React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-ts';
import App from './app';

const root = document.createElement('div');
document.body.appendChild(root);

hot(module)(
    render(<App/>, root)
);
