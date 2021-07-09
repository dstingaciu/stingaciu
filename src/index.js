import React from 'react';
import { render } from 'react-dom';
import './css/entry.scss';

const Root = () => {
    return <h1>Test</h1>;
};

render(<Root />, document.getElementById('root'));
