import {TaskData, TaskListData} from "../../../types";

export interface TasksState {
    taskList: TaskListData;
}

export enum TaskActionEnum {
    CREATE_TASK_LIST = "CREATE_TASK_LIST",
    REMOVE_TASK_LIST = "REMOVE_TASK_LIST",
    CREATE_TASK = "CREATE_TASK",
    UPDATE_TASK = "UPDATE_TASK",
    REMOVE_TASK = "REMOVE_TASK",
    UPDATE_TASK_STATUS = "UPDATE_TASK_STATUS",
}

export interface CreateTaskListAction {
    type: TaskActionEnum.CREATE_TASK_LIST;
    payload: string;
}


export interface RemoveTaskListAction {
    type: TaskActionEnum.REMOVE_TASK_LIST;
    payload: string;
}


export interface CreateTaskAction {
    type: TaskActionEnum.CREATE_TASK;
    payload: { taskData: TaskData, projectId: string };
}

export interface UpdateTaskAction {
    type: TaskActionEnum.UPDATE_TASK;
    payload: { taskData: TaskData, projectId: string };
}

export interface UpdateTaskStatusAction {
    type: TaskActionEnum.UPDATE_TASK_STATUS;
    payload: { taskId: string, projectId: string };
}

export interface RemoveTaskAction {
    type: TaskActionEnum.REMOVE_TASK;
    payload: { taskId: string, projectId: string };
}

export type TaskAction =
    CreateTaskListAction
    | RemoveTaskListAction
    | CreateTaskAction
    | UpdateTaskAction
    | RemoveTaskAction
    | UpdateTaskStatusAction;