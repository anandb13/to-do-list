import React, {useState} from "react";

function TodoApp() {

    const [task, setTask] = useState("");
    const [tasklist, setTaskList] = useState([])

    const handleChange = (e) => {
      setTask(e.target.value);
    }
    const AddTask = () => {
        if (task !== ""){
            const taskDetails = {
                id: Math.floor(Math.random()*1000),
                value: task,
                isCompleted: false,
            }
            setTaskList([...tasklist, taskDetails]);
        }
        
    }
    const deleteTask = (e, id) => {
        e.preventDefault();
        setTaskList(tasklist.filter(t => t.id != id))
    }
    return(
        <div>
            <input 
            type="text" 
            name="text" 
            id="text" 
            onChange={e => handleChange(e)} 
            placeholder="Add task" />
            <button onClick={AddTask}>Add</button>
            {
            tasklist !== [] ?
            <ul>
                {tasklist.map(t => 
                    <li>
                        {t.value}
                        <button onClick={e => deleteTask(e, t.id)}>Delete</button>
                    </li>
                )}
            </ul>
            : null }

        </div>
    );
}
export default TodoApp;