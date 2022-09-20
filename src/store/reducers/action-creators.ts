import {AuthActionCreators} from "./auth/auth-actionCreators";
import {TasksActionCreators} from "./tasks/tasks-actionCreators";
import {ProjectsActionCreators} from "./projects/projects-actionCreators";

export const allActionCreators = {
    ...AuthActionCreators,
    ...TasksActionCreators,
    ...ProjectsActionCreators,
}