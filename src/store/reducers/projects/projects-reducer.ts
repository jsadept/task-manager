import {ProjectAction, ProjectActionEnum, ProjectsState} from "./projects-types";


const initialState: ProjectsState = {
    projectList: []
}


export default function projectsReducer(state = initialState, action: ProjectAction): ProjectsState {
    switch (action.type) {
        case ProjectActionEnum.CREATE_PROJECT: {
            const updatedProjects = [
                action.payload,
                ...state.projectList!
            ]
            return {...state, projectList: [...updatedProjects]}
        }
        case ProjectActionEnum.UPDATE_PROJECT: {
            const updatedProjects = state.projectList!.map((item, index) => {
                if (item.id === action.payload.id) {
                    return {...item, ...action.payload}
                }
                return item;
            })
            return {...state, projectList: [...updatedProjects]}
        }
        case ProjectActionEnum.UPDATE_PROJECT_STATUS: {
            const updatedProjects = state.projectList!.map((item, index) => {
                if (item.id === action.payload) {
                    return {...item, status: item.status === 'open' ? 'close' : 'open'}
                }
                return item;
            })
            return {...state, projectList: [...updatedProjects]}
        }
        case ProjectActionEnum.REMOVE_PROJECT: {
            const updatedProjects = state.projectList!.filter((item, index) => {
                return item.id !== action.payload;
            })
            return {...state, projectList: [...updatedProjects]}
        }
        default:
            return state;
    }
}