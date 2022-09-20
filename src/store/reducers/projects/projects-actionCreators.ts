import {AppDispatch} from "../../index";
import {
    CreateProjectAction,
    ProjectActionEnum,
    RemoveProjectAction,
    UpdateProjectAction,
    UpdateProjectStatusAction
} from "./projects-types";


export const ProjectsActionCreators = {
    addProjectToState: (projectData: any): CreateProjectAction => ({
        type: ProjectActionEnum.CREATE_PROJECT,
        payload: projectData
    }),
    updateProjectInState: (projectData: any): UpdateProjectAction => ({
        type: ProjectActionEnum.UPDATE_PROJECT,
        payload: projectData
    }),
    removeProjectFromState: (projectId: string): RemoveProjectAction => ({
        type: ProjectActionEnum.REMOVE_PROJECT,
        payload: projectId
    }),
    updateProjectStatusInState: (projectId: string): UpdateProjectStatusAction => ({
        type: ProjectActionEnum.UPDATE_PROJECT_STATUS,
        payload: projectId
    }),


    createProject: (projectData: any) => (dispatch: AppDispatch) => {
        console.log(projectData)
        dispatch(ProjectsActionCreators.addProjectToState(projectData))
    },
    updateProject: (projectData: any) => (dispatch: AppDispatch) => {
        dispatch(ProjectsActionCreators.updateProjectInState(projectData))
    },
    removeProject: (projectId: string) => (dispatch: AppDispatch) => {
        console.log(projectId)
        dispatch(ProjectsActionCreators.removeProjectFromState(projectId))
    },
    updateProjectStatus: (projectId: string) => (dispatch: AppDispatch) => {
        dispatch(ProjectsActionCreators.updateProjectStatusInState(projectId))
    },
}