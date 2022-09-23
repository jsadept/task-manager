import React, {FC, useEffect, useState} from 'react';
import Modal from "../Modal/Modal";
import CreateTaskForm from "../Forms/CreateTaskForm";
import {useActions} from "../../hooks/redux";
import {TaskData} from "../../types";
import {useFindProjectById} from "../../hooks/project";
import {PlusIcon} from "@heroicons/react/24/outline";

interface TasksListProps {
    projectId: string;
    tasks: TaskData[];

}

const TasksList: FC<TasksListProps> = ({projectId, tasks}) => {

    // const tasks = [
    //     {
    //         id: '1',
    //         title: 'Create structure',
    //         status: 'in progress',
    //     },
    //
    //     {
    //         id: '2',
    //         title: 'Update dependencies',
    //         status: 'in progress',
    //     },
    //
    //     {
    //         id: '3',
    //         title: 'Create store',
    //         status: 'done',
    //     },
    // ]
    console.log(tasks)

    const {updateTaskStatus} = useActions();
    const currentProject = useFindProjectById(projectId);
    const {removeTask} = useActions();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editData, setEditData] = useState<any>({
        isNew: false,
        taskId: '',
        projectId: ''
    });

    const removeItem = (taskId: string) => {
        removeTask(taskId, projectId);
    };
    const createItem = () => {
        setEditData({
            isNew: true,
            taskId: '',
            projectId: ''
        })

        setIsModalOpen(true)
    }

    const changeStatus = (id: string) => {
        updateTaskStatus(id, projectId)
    }

    const editItem = (task: TaskData) => {
        setEditData({
            ...task,
            isNew: false,
        })
        setIsModalOpen(true)
    }
    useEffect(() => {
        if (editData.projectId) {
            setIsModalOpen(true);
        }
    }, [editData.projectId])
    console.log(tasks.length > 0)
    console.log(currentProject)

    return (
        <div className="px-0 sm:px-0 lg:px-0 mb-56">


            {tasks.length > 0 &&
                <>
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <h1 className="text-xl font-semibold text-gray-900">{currentProject.title}</h1>
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                            <button
                                onClick={() => createItem()}
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                            >
                                Add task
                            </button>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col">
                        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead className="bg-gray-50">
                                        <tr>
                                            <th scope="col"
                                                className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                Title
                                            </th>
                                            <th scope="col"
                                                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Status
                                            </th>
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                <span className="sr-only">Done, Edit or Remove</span>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                        {tasks.map((task) => (
                                            <tr key={task.id}>
                                                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                    {task.title}
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">

                                                    {task.status === 'open'
                                                        ?
                                                        <span
                                                            className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-blue-100 text-blue-800">
                                                    {task.status}
                                                </span>
                                                        :
                                                        <span
                                                            className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800">
                                                    {task.status}
                                                </span>
                                                    }

                                                </td>
                                                <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                    <button
                                                        onClick={() => changeStatus(task.id!)}
                                                        className={"rounded-md py-2 pl-3 pr-3 mr-1.5 ml-1.5 " + (task.status === "open" ? "bg-green-100 hover:bg-green-200 text-green-800 " : "bg-purple-100 hover:bg-purple-200 text-purple-800")}>
                                                        {task.status === 'open' ? 'Close' : 'Open'}<span
                                                        className="sr-only">, {task.title}</span>
                                                    </button>
                                                    <button
                                                        onClick={() => editItem(task)}
                                                        className="rounded-md py-2 bg-blue-100   hover:bg-blue-200   text-blue-800 pl-3 pr-3 mr-1.5 ml-1.5">
                                                        Edit<span className="sr-only">, {task.title}</span>
                                                    </button>
                                                    <button
                                                        onClick={() => removeItem(task.id!)}
                                                        className="rounded-md py-2  bg-red-100  hover:bg-red-200  text-red-800 pl-3 pr-3 mr-1.5 ml-1.5 ">
                                                        Remove<span className="sr-only">, {task.title}</span>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </>


            }
            {tasks.length === 0 &&

                <div className="text-center">
                    <PlusIcon className="h-5 w-5 mx-auto h-12 w-12 text-gray-400" aria-hidden="true"/>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No tasks for {currentProject.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">Get started by creating a new task.</p>
                    <div className="mt-6">
                        <button
                            onClick={() => createItem()}
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true"/>
                            New Task
                        </button>
                    </div>
                </div>
            }
            <Modal {...{isModalOpen, setIsModalOpen}}>
                <CreateTaskForm {...{currentProject, setIsModalOpen, currentTaskData: editData}}/>
            </Modal>

        </div>
    );
};

export default TasksList;