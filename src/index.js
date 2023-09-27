import React from 'react';
import ReactDOM from 'react-dom/client';
import ModuleTitle from './components/ModuleTitle';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <>
        <ModuleTitle name="Front End Development"/>
        <ModuleTitle name="Advanced Java Script"/>
    </>
);