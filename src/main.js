import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/app';
import THREE from 'three';

let appProps = {
    initialSlideNum: 1  // Later we might initialise initialSlideNum from URL hash etc.
};

ReactDOM.render(
    React.createElement( AppComponent, appProps ),
    document.getElementById('app')
);
