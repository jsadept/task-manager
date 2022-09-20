import {ProjectData} from "../../../types";

export interface ProjectsState {
    projectList: ProjectData[];
}

export enum ProjectActionEnum {
    CREATE_PROJECT = "CREATE_PROJECT",
    UPDATE_PROJECT = "UPDATE_PROJECT",
    REMOVE_PROJECT = "REMOVE_PROJECT",
    UPDATE_PROJECT_STATUS = "UPDATE_PROJECT_STATUS",
}

export interface CreateProjectAction {
    type: ProjectActionEnum.CREATE_PROJECT;
    payload: ProjectData;
}

export interface UpdateProjectAction {
    type: ProjectActionEnum.UPDATE_PROJECT;
    payload: ProjectData;
}

export interface UpdateProjectStatusAction {
    type: ProjectActionEnum.UPDATE_PROJECT_STATUS;
    payload: string;
}

export interface RemoveProjectAction {
    type: ProjectActionEnum.REMOVE_PROJECT;
    payload: string;
}

export type ProjectAction = CreateProjectAction | UpdateProjectAction | RemoveProjectAction | UpdateProjectStatusAction;