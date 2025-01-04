import React from 'react'

const TaskList = ({ taskList }) => {
    console.log('TaskList: ', taskList)
    return (
        <>
            <ol>
                {
                    taskList.map((task) => {
                        return <li key={task.id}>{task.title}</li>
                    })
                }
            </ol>
        </>
    )
}

export default TaskList;
