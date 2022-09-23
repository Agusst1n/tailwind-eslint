import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <p className="text-sm ...">The quick brown fox ...</p>
      <p className="text-base ...">The quick brown fox ...</p>
      <p className="text-lg ...">The quick brown fox ...</p>
      <p className="text-xl ...">The quick brown fox ...</p>
      <p className="text-2xl ...">The quick brown fox ...</p>
    </div>
  );
}

export default App;
