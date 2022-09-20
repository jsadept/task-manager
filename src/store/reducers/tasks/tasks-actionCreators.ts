import {AppDispatch} from "../../index";
import {
    CreateTaskAction,
    CreateTaskListAction,
    RemoveTaskAction,
    RemoveTaskListAction,
    TaskActionEnum,
    UpdateTaskAction,
    UpdateTaskStatusAction
} from "./tasks-types";
import {TaskData} from "../../../types";


export const TasksActionCreators = {
    createTaskListInState: (projectId: string): CreateTaskListAction => ({
        type: TaskActionEnum.CREATE_TASK_LIST,
        payload: projectId
    }),

    removeTaskListFromState: (projectId: string): RemoveTaskListAction => ({
        type: TaskActionEnum.REMOVE_TASK_LIST,
        payload: projectId
    }),

    addTaskToState: (taskData: TaskData, projectId: string): CreateTaskAction => ({
        type: TaskActionEnum.CREATE_TASK,
        payload: {projectId, taskData}
    }),
    updateTaskInState: (taskData: TaskData, projectId: string): UpdateTaskAction => ({
        type: TaskActionEnum.UPDATE_TASK,
        payload: {projectId, taskData}
    }),
    updateTaskStatusInState: (taskId: string, projectId: string): UpdateTaskStatusAction => ({
        type: TaskActionEnum.UPDATE_TASK_STATUS,
        payload: {projectId, taskId}
    }),
    removeTaskFromState: (taskId: string, projectId: string): RemoveTaskAction => ({
        type: TaskActionEnum.REMOVE_TASK,
        payload: {projectId, taskId}
    }),

    //createTaskProject:

    createTask: (taskData: TaskData, projectId: string) => (dispatch: AppDispatch) => {
        dispatch(TasksActionCreators.addTaskToState(taskData, projectId))
    },
    updateTask: (taskData: TaskData, projectId: string) => (dispatch: AppDispatch) => {
        dispatch(TasksActionCreators.updateTaskInState(taskData, projectId))
    },
    updateTaskStatus: (taskId: string, projectId: string) => (dispatch: AppDispatch) => {
        dispatch(TasksActionCreators.updateTaskStatusInState(taskId, projectId))
    },
    removeTask: (taskId: string, projectId: string) => (dispatch: AppDispatch) => {
        dispatch(TasksActionCreators.removeTaskFromState(taskId, projectId))
    },


    createTaskList: (projectId: string) => (dispatch: AppDispatch) => {
        dispatch(TasksActionCreators.createTaskListInState(projectId))
    },
    removeTaskList: (projectId: string) => (dispatch: AppDispatch) => {
        dispatch(TasksActionCreators.removeTaskListFromState(projectId))
    }
}