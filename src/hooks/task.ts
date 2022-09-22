import {useTypedSelector} from "./redux";


export const useFindTaskById = (taskId: string, projectId: string) => {
    const {taskList} = useTypedSelector(state => state.tasks);

    return taskList[projectId].filter((current) => current.id === taskId)[0];
}