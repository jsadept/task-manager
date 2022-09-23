export interface ProjectData {
    id?: string;
    title?: string;
    progress?: number;
    status?: string;
    deadline?: Date;
}


export interface TaskData {
    projectId?: string;
    id?: string;
    title?: string;
    status?: string;
}

export interface IUser {
    userName?: string;
    isAuth: boolean;
}


export interface IDataBase {
    id?: string | null;
    isAuth?: boolean;
    projectList?: ProjectData[];
    taskList?: TaskListData;
}

export interface TaskListData {
    [key: string]: TaskData[];
}