import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Exercise from './Exercise';
import JsxArrays from './JsxArrays';
import ExerciseArray from './ExerciseArray';
import Events from './Events';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {/* <App /> */}
    <Exercise />
    <JsxArrays />
    <ExerciseArray />
    <Events/>
  </React.StrictMode>
);

