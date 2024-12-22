import { React, useReducer, useState, useEffect, useCallback } from 'react';
import logo from './logo.svg';

import './App.css';
import Timer from './timer';
import Loder from './loder';
import ReusableDropdown from './reusableDropdown';
import ThemeProvider from './themeContext';
import DarkModeToggle from './drakTheme';
import useFetch from './Hooks/useFetch';
import Child from './child';

function App() {

  const intialState = {
    userName: '',
    email: ''
  };
  const [isLoading, setIsLoading] = useState(true);
  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");
   const [count, setCount] = useState(0);

  const EnhancedLoder = Loder(Timer);

  

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  },[])

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false); // Stop loading after 1 second
  //   }, 1000); // 1000ms = 1 second

  //   return () => clearTimeout(timer); // Cleanup timer on unmount
  // }, [])

  const formReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_FIELD': {
        return {
          ...state,
          [action.fieldName] : action.fieldValue
        }
      }
      case 'RESET_FIELD': {
        return action.intialState
        }
    }
  }


  const [state, dispatch] = useReducer(formReducer, intialState)

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

  if (loading) {
    return <p>Lodding..</p>;
  }

  if (error) {
    return <p>error: {error}</p>;
  }

  if (data) {
    console.log(data);

  }


  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <DarkModeToggle />
          <input name='userName' placeholder='name' value={state.userName} onChange={(e) => handleFieldChange(e)}></input>
          <input name='email' placeholder='email' value={state.email} onChange={(e) => handleFieldChange(e)}></input>
          <button onClick={handleReset}>Reset</button>
          <p>Username: {state.userName}</p>
          <p>Email: {state.email}</p>

          <h1>select option: {showSelected}</h1>
          <ReusableDropdown options={options} handleSelected={handleSelected} />

          <Timer />
          <EnhancedLoder isLoading={isLoading} data={'Thiyagu'} />

          <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child handleClick={handleClick} />

          <ul>
            {data?.map((item) => <li key={item.id}>{item.title}</li>)}
          </ul>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
