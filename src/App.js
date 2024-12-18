import { React, useReducer, useState } from 'react';
import logo from './logo.svg';

import './App.css';
import Timer from './timer';

function App() {

  const intialState = {
    userName: '',
    email: ''
  };

  const formReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_FIELD': {
        return {
          ...state,
          [action.fieldName]: action.fieldValue
        };
      }
      case 'RESET_FIELD': {
        return action.intialState;
      }
    }
  };

  const [state, dispatch] = useReducer(formReducer, intialState);

  const handleFieldChange = (e) => {
    dispatch({
      type: 'UPDATE_FIELD',
      fieldName: e.target.name,
      fieldValue: e.target.value
    });
  };

  const handleReset = () => {
    dispatch({
      type: 'RESET_FIELD',
      intialState
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <input name='userName' placeholder='name' value={state.userName} onChange={(e) => handleFieldChange(e)}></input>
        <input name='email' placeholder='email' value={state.email} onChange={(e) => handleFieldChange(e)}></input>
        <button onClick={handleReset}>Reset</button>
        <p>Username: {state.userName}</p>
        <p>Email: {state.email}</p>

        <Timer />
      </header>
    </div>
  );
}

export default App;
