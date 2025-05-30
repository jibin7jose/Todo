import React, { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState('');

  const handleDelete = (id) => {
    setToDos(toDos.filter((item) => item.id !== id));
  };

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />

      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            if (toDo.trim() !== '') {
              setToDos([...toDos, { id: Date.now(), text: toDo }]);
              setToDo('');
            }
          }}
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((item) => (
          <div className="todo" key={item.id}>
            <div className="left">
              <p>{item.text}</p>
            </div>
            <div className="right">
              <i
                className="fas fa-times"
                onClick={() => handleDelete(item.id)}
              ></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
