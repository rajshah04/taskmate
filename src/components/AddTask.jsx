import React from 'react'

const AddTask = ({tasklist , setTasklist , task , setTask}) => {

    const submitHandler = (e) => {
        e.preventDefault() ;

        if(task.id){
            const date = new Date() ;
            const updatedTasklist = tasklist.map((todo) => (
                // todo.id === task.id ? {id: task.id , name: e.target.task.value , time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : {id: todo.id , name: todo.name , time: todo.time} 
                todo.id === task.id ? {id: task.id , name: task.name , time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo 
            ));
            setTasklist(updatedTasklist) ;
            setTask({}) ;
        }
        else {
            const date = new Date() ;
            // console.log(e.target.task.value) ;
            // console.log(date.getTime()) ;
            const newTask = {
                id: date.getTime() , 
                name: e.target.task.value , 
                time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            } ;

            setTasklist([...tasklist , newTask]) ;
            // console.log(tasklist) ;
            setTask({}) ;
        }
    }

    return (
        <section className='addTask'>
            <form onSubmit={submitHandler}>
                <input type="text" name='task' autoComplete='off' placeholder='Add a Task' maxLength="25" value={task.name || ""} onChange={(e) => setTask({...task, name:e.target.value})} />
                <button type='submit'>{task.id ? "Update" : "Add"}</button>
            </form>
        </section>
    )
}

export default AddTask