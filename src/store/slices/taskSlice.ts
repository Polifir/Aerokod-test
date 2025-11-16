import { createSlice } from "@reduxjs/toolkit";
import type { ITask } from "../../types/task";


interface ITaskData {
    tasks: ITask[],
    search: string,
    filterTasks: ITask[],
    activeTaskId: null | string,
}

const initialState: ITaskData = {
    tasks: [],
    filterTasks: [],
    search: '',
    activeTaskId: null,
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
           state.tasks =  [action.payload, ...state.tasks];
        },
        editActiveTask: (state, action) => {
            state.activeTaskId = action.payload
        },
        deleteTask: (state, action) => {
            state.filterTasks = state.filterTasks.filter(e => e.id !== action.payload)
            state.tasks = state.tasks.filter(e => e.id !== action.payload)
        },
        editTimeTask: (state, action) =>{
            state.tasks = state.tasks.map(e =>{
                if(e.id === action.payload.id){
                    return {...e, ...action.payload}
                }
                return e
            })
            state.filterTasks = state.tasks.map(e =>{
                if(e.id === action.payload.id){
                    return {...e, ...action.payload}
                }
                return e
            })

            if (!state.search.trim()) {
                state.filterTasks = state.tasks;
            } else {
                state.filterTasks = state.tasks.filter(task => 
                    task.description.toLowerCase().includes(state.search.toLowerCase()) || 
                    task.title.toLowerCase().includes(state.search.toLowerCase())
                );
            }
        },
        searchTask: (state, action) => {
            state.search = action.payload
            state.filterTasks = state.tasks.filter(e => {
                
                if(e.description.toLowerCase().includes(action.payload.toLowerCase()) ||
                    e.title.toLowerCase().includes(action.payload.toLowerCase())){
                    return e
                }
            })
        }
    }
})

export const {addTask, searchTask, editTimeTask, editActiveTask, deleteTask} = taskSlice.actions;

export default taskSlice.reducer