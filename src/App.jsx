import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [description, setDescription] = useState('');
  const [arr, setArr] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === '' || description.trim() === '') {
      return;
    }

    const newItem = {
      title: input,
      description: description,
    };

    setArr([...arr, newItem]);

    setInput('');
    setDescription('');
  };

  const handleClick = (index) => {
    const newArr = arr.filter((ele, i) => i !== index);
    setArr(newArr);
  };

  const display = arr.map((ele, i) => (
    <li key={i}>
      <p>{ele.title}</p>
      <p className='description'>{ele.description}</p>
      <button className="delete" onClick={() => handleClick(i)}>X</button>
    </li>
  ));

  return (
    <div className="todoContainer">
      <div className="todo">
        <div className="task-enter">
          <form action="" onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={input} onChange={handleInput} />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Description"
              value={description}
              onChange={handleDescription}
            ></textarea>
            <button className='save'>Save</button>
          </form>
        </div>
        <div className="display">
          <div className="pending">
            <div className="heading">
              <p>Title</p>
              <p>Description</p>
              <p>Delete</p>
            </div>
            <div className="task-display">
              {arr.length > 0 && <ul>{display}</ul>}
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default App;
