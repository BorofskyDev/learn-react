import React, { useState } from 'react';
import Counter from './Counter';
import './App.css';
import CounterHooks from './CounterHooks';


export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <h1>Class Counter</h1>
      <Counter initialCount={0} />
      <br />
      <h1>Function Counter with Hooks</h1>
      <CounterHooks initialCount={0} />
     <button onClick={() => setTheme(prevTheme => {
      return prevTheme === "red" ? 'blue' : 'red'
     })} >Change Theme</button>
    </ThemeContext.Provider>
  );
}

export default App;
