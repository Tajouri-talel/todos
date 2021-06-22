import React, { useState } from 'react';
import { addTask } from '../redux/actions';
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';

function AddTask() {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <div>
            <div className="row m-5">
                <input
                defaultValue="WHAT TO DO ?!..."
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="text" className="col form-control"/>
                <button
                
                onClick={()=>{
                       dispatch(  addTask({
                        id: uuid(),
                        name: name
                    }));
                        setName('');
                    }}
                className="btn btn-primary mx-">Add</button>
            </div>
        </div>
    )
}

export default AddTask
