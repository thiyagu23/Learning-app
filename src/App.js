import { React, useReducer, useState, useEffect } from 'react';
import logo from './logo.svg';

import './App.css';
import Timer from './timer';
import Loder from './loder';
import ReusableDropdown from './reusableDropdown';

function App() {

  const intialState = {
    userName: '',
    email: ''
  };
  const [isLoading, setIsLoading] = useState(true);

  const EnhancedLoder = Loder(Timer);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Stop loading after 1 second
    }, 1000); // 1000ms = 1 second

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

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

  const [showSelected, setShowSelected] = useState('');

  const options = ['apple', 'mango', 'orage'];

  const handleSelected = (data) => {
    setShowSelected(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input name='userName' placeholder='name' value={state.userName} onChange={(e) => handleFieldChange(e)}></input>
        <input name='email' placeholder='email' value={state.email} onChange={(e) => handleFieldChange(e)}></input>
        <button onClick={handleReset}>Reset</button>
        <p>Username: {state.userName}</p>
        <p>Email: {state.email}</p>

        <h1>select option: {showSelected}</h1>
        <ReusableDropdown options={options} handleSelected={handleSelected} />

        <Timer />
        <EnhancedLoder isLoading={isLoading} data={'Thiyagu'} />
      </header>
    </div>
  );
}

export default App;
