import React from 'react';
import ReactDOM from 'react-dom/client';
import StartReact from './StartReact';
import Exercise from './Exercise';
import JsxArrays from './JsxArrays';
import ExerciseArray from './ExerciseArray';
import Events from './Events';
import App from './Components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <StartReact />
    <Exercise />
    <JsxArrays />
    <ExerciseArray />
    <Events/> */}

    <App/>
  </React.StrictMode>
);

