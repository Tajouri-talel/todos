import React from 'react'
import TaskItem from './TaskItem'
import { useSelector } from 'react-redux'

function TaskList() {
    let Tasks = useSelector(state=>state.Tasks);
    let filteredState = useSelector((state) => state.filteredState);

    const newList = () => {
        if (filteredState === "all") {
          return Tasks;
        }
        if (filteredState === "done") {
          return Tasks.filter((el) => el.completed === true);
        }
        if (filteredState === "not_done") {
          return Tasks.filter((el) => el.completed === false);
      }
      };
      let finalList = newList();

    return (
        <div className="my-5">
            {finalList.map((task)=>   {
                return <TaskItem key={Tasks.id} task={task} completed={task.completed}/>;
            })}
        </div>
    )
}

export default TaskList
