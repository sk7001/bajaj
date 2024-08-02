import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      console.log(input)
      const response = await fetch('http://localhost:3000/bfhl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(JSON.parse(input))
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setResult(data);
      setError('');
    } catch (err) {
      setError('Invalid JSON or network error');
      setResult(null);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>BFHL Challenge</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter JSON'
          style={{ width: '80%', padding: '10px', marginBottom: '10px' }}
        />
        <button onClick={handleSubmit} style={{ padding: '10px 20px' }}>Submit</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {result && (
          <div>
            <h3>Result</h3>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
