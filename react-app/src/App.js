import React,{useState} from 'react';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ButtonFunctionComponent from './components/ButtonFunctionComponent';

function App() {

  const [flag, setFlag] = useState(true)

  return (
    <div className="App">
      <button onClick={()=>setFlag(!flag)}>Show/Hide</button>
      {flag && <ButtonComponent />}
      {flag && <ButtonFunctionComponent />}
    </div>
  );
}

export default App;
