import React, { useState } from 'react';

const ListManager = () => {
  const [list, updateList] = useState([]);
  const [input, setInput] = useState('');

  const addToList = () => {
    if (input.trim() !== '') {
      updateList([...list, input.trim()]);
      setInput('');
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>List Manager</h1>
      <input
        type="text"
        placeholder="Enter item"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: '100%',
          padding: '8px',
          marginBottom: '10px',
          boxSizing: 'border-box',
        }}
      />
      <button
        onClick={addToList}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '4px',
        }}
      >
        Add Item
      </button>
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {list.map((entry, idx) => (
          <li key={idx} style={{ marginBottom: '8px', borderBottom: '1px solid #ccc' }}>
            {entry}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListManager;
