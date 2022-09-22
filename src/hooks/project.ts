import {useTypedSelector} from "./redux";


export const useFindProjectById = (id: string) => {
    const {projectList} = useTypedSelector(state => state.projects);

    return projectList.filter((current) => current.id === id)[0];
}