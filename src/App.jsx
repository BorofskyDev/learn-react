import Counter from './Counter';
import './App.css';
import CounterHooks from './CounterHooks';

function App() {
  return (
    <>
      <h1>Class Counter</h1>
      <Counter initialCount={0} />
      <br />
      <h1>Function Counter with Hooks</h1>
      <CounterHooks initialCount={0} /> 
    </>
  );
}

export default App;
