import { useState } from 'react'
import AddForm from './AddForm'
import TaskList from './TaskList';

export default function ToDo() {

    const [tasks, setTasks] = useState([]);

    const addTask = (title) => {
        setTasks([...tasks, { id: tasks.length + 1, title }])
    }
    return (
        <>
            <h1>To-Do App</h1>
            <AddForm addTask={addTask} />
            <TaskList taskList={tasks} />
        </>
    )
}
