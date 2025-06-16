import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [a, setA] = useState(0);
  return (
    <div className="App">
      Hello 
      <button onClick={()=>{setA(a+1)}}>For high</button>
{a}
      <button onClick={ ()=>{setA(a-1)}}>For low</button>
    </div>
  );
}

export default App;
