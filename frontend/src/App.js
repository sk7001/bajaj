import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:3000/bfhl', JSON.parse(input), {
        headers: { 'Content-Type': 'application/json' }
      });
      setResult(response.data);
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
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter JSON'
          style={{ width: '80%', height: '100px', padding: '10px', marginBottom: '10px' }}
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