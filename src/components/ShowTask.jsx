import React from 'react'

const ShowTask = ({tasklist , setTasklist , task , setTask}) => {

    const editHandler = (id) => {
        const selectedTask = tasklist.find(todo => todo.id === id) ;
        // console.log(selectedTask) ;
        setTask(selectedTask) ;
    }

    const deleteHandler = (id) => {
        const updatedTaskList = tasklist.filter(todo => todo.id !== id) ;
        setTasklist(updatedTaskList) ;
    }

    return (
        <section className='showTask'> 
            <div className='head'>
                <div>
                    <span className='title'>Todo</span>
                    <span className='count'>{tasklist.length}</span>
                </div>
                {   tasklist.length > 0 && 
                    <button className='clearAll' onClick={() => setTasklist([])}>Clear All</button>
                }
            </div>
            <ul>
                { tasklist.map((todo) => (
                    <li key={todo.id}>
                        <p>
                            <span className='name'>{todo.name}</span>
                            <span className='time'>{todo.time}</span>
                        </p>
                        <i onClick={() => editHandler(todo.id)} className='bi bi-pencil-square'></i>
                        <i onClick={() => deleteHandler(todo.id)} className='bi bi-trash'></i>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ShowTask