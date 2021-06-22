import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask, updateTask,completedTask } from '../redux/actions';

function TaskItem({ task }) {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(task.name)
    let dispatch = useDispatch();

    

    /*const toggle = (id) => {
        dispatch({
          completedTask(taskId)
        });
      }; */



    return (
        <div>
            <div className="row mx-5 align-items-center">
            <div>
                    <input type='checkbox' className='mr-3' onClick={() => dispatch(completedTask(task.id))}
                    />
                    </div>
                <div>Id: {task.id.length > 1 ? task.id[2] : task.id}</div>
                <div className="col">
                    {editable ?
                        <input type="text" className="form-control"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}

                        />
                        :
                        <h4>{task.name}</h4>}
                </div>
                <button className="btn btn-primary m-2"
                    onClick={() => {
                        dispatch(updateTask({
                            ...task,
                            name: name
                        }))
                        if(editable) {
                         setName(task.name);   
                        }
                        setEditable(!editable);
                      

                    }}
                >{editable?"Update":"Edit"}</button>
                <button className="btn btn-danger m-2"
                    onClick={() => dispatch(deleteTask(task.id))}
                >Delete</button>
            </div>
        </div>
    )
}

export default TaskItem
