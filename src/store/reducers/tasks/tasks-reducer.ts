import {TaskAction, TaskActionEnum, TasksState} from "./tasks-types";


const initialState: TasksState = {
    taskList: {}
}


export default function tasksReducer(state = initialState, action: TaskAction): TasksState {
    switch (action.type) {
        case TaskActionEnum.CREATE_TASK_LIST: {
            const updatedTasks = {
                ...state.taskList!,
                [action.payload]: []
            }


            return {...state, taskList: updatedTasks!}
        }


        case TaskActionEnum.REMOVE_TASK_LIST: {
            const {
                [action.payload]: removed,
                ...updatedTasks
            } = state.taskList;

            return {...state, taskList: updatedTasks!}
        }


        case TaskActionEnum.CREATE_TASK: {

            const task = action.payload.taskData;
            const projectId = action.payload.projectId;
            const oldList = state.taskList[projectId];

            const newState = {
                ...state.taskList,
                [projectId]: [
                    task,
                    ...oldList
                ]
            }
            console.log({...state, taskList: newState!})

            return {...state, taskList: newState!}
        }


        case TaskActionEnum.UPDATE_TASK: {

            const task = action.payload.taskData;
            const projectId = action.payload.projectId;
            const oldList = state.taskList[projectId];

            const myObj = oldList.filter((current) => current.id === task.id)[0];
            const myObjIndex = oldList.findIndex((current) => current.id === task.id);

            const newObj = {...myObj, ...task}


            const newState = {
                ...state.taskList,
                [projectId]: [
                    ...oldList.slice(0, myObjIndex),
                    newObj,
                    ...oldList.slice(myObjIndex + 1)
                ]
            }

            return {...state, taskList: newState!}
        }


        case TaskActionEnum.UPDATE_TASK_STATUS: {

            const taskId = action.payload.taskId;
            const projectId = action.payload.projectId;
            const oldList = state.taskList[projectId];

            const myObj = oldList.filter((current) => current.id === taskId)[0];
            const myObjIndex = oldList.findIndex((current) => current.id === taskId);

            const newObj = {...myObj, status: myObj.status === 'open' ? 'close' : 'open'}


            const newState = {
                ...state.taskList,
                [projectId]: [
                    ...oldList.slice(0, myObjIndex),
                    newObj,
                    ...oldList.slice(myObjIndex + 1)
                ]
            }

            return {...state, taskList: newState!}
        }


        case TaskActionEnum.REMOVE_TASK: {
            const taskId = action.payload.taskId;
            const projectId = action.payload.projectId;
            const oldList = state.taskList[projectId];

            const myObjIndex = oldList.findIndex((current) => current.id === taskId);

            //console.log(myObjIndex)
            const newState = {
                ...state.taskList,
                [projectId]: [
                    ...oldList.slice(0, myObjIndex),
                    ...oldList.slice(myObjIndex + 1)
                ]
            }

            return {...state, taskList: newState!}
        }


        default:
            return state;
    }
}