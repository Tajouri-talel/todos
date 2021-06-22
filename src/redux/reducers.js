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
            return {
                ...state,
                Tasks: state.Tasks.filter((el) => el.id !== action.payload),
              };
            //return newTasks;
        case UPDATE_TASK:
            return {
                ...state,
                Tasks: state.Tasks.map((el) => {
                  if (el.id === action.payload.id) {
                    el.value = action.payload.name;
                  }
                  return el;
                }),
              };

        case COMPLETED_TASK:
            //newTasks = [...state];
            return {
                ...state,
                Tasks: state.Tasks.map((el) => {
                  if (el.id === action.payload) {
                    el.completed = !el.completed;
                  }
                  return el;
                }),
              };
            
        case FILTER:
            return {
                ...state,
                filteredState: action.payload,
              };
            


    }

    return state;
}