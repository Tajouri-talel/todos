import { ADD_TASK, UPDATE_TASK, DELETE_TASK, COMPLETED_TASK, FILTER } from './actions';
//import { tasks } from './states';

const initialState = {
    
    Tasks: [
        {
            id:1,
            name: "Task 1",
            completed: false,
        },
        {
            id:2,
            name: "Task 2",
            completed: false,
        },
        {
            id:3,
            name: "Task 3",
            completed: false,
        },
      ],
      
      filteredState: "all",
      
      
    };

export let reducer = (state = initialState, action) => {
    let newTasks;
    switch (action.type) {
        case ADD_TASK:
            return { ...state, Tasks: [...state.Tasks, action.payload] };

            return newTasks;
        case DELETE_TASK:
            newTasks = [...state.Tasks];
            newTasks = newTasks.filter(task => task.id != action.payload);
            return newTasks;
        case UPDATE_TASK:
            newTasks = [...state];
            let index = -1;
            for (let i = 0; i < newTasks.length; i++) {
                index++;
                if (newTasks[i].id == action.payload.id) {
                    break;
                }

            }
            if (index != -1) {
                newTasks[index] = action.payload;
                return newTasks;
            }
        case COMPLETED_TASK:
            newTasks = [...state];
            let indx = -1;
            for (let i = 0; i < newTasks.length; i++) {
                indx++;
                if (newTasks[i].id === action.payload) {
                    break;
                }
            }
            if (indx !== -1) {
                newTasks.completed = action.payload;
                return newTasks;    
            }  
        case FILTER:
            return {
                ...state,
                filteredState: action.payload,
              };
            


    }

    return state;
}