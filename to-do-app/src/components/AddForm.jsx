import { useState } from 'react';

const AddForm = ({ addTask }) => {
  const [title, setTitle] = useState('');

  const handleTaskChange = (e) => {
    setTitle(e.target.value);
  }

  const handleClick = () => {
    if (!title) {
      alert('Please enter a task');
      return;
    }
    addTask(title);
    setTitle('');
  }

  return (
    <>
    <div>
      <input type="text" placeholder="Enter a task" value={title} onChange={handleTaskChange} style={{ marginRight: "10px" }}/>
      <button onClick={handleClick}>Create Task</button>
      </div>
    </>
  )
}

export default AddForm;
