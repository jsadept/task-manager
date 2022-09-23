import React, {FC, useState} from 'react';
import Modal from "../Modal/Modal";
import CreateProjectForm from "../Forms/CreateProjectForm";
import {useActions} from "../../hooks/redux";
import {getNumberOfDays} from "../../utils/getNumberOfDates";
import {PlusIcon} from "@heroicons/react/24/outline";

interface ProjectsListProps {
    projectList: any[];
}

const ProjectsList: FC<ProjectsListProps> = ({projectList}) => {
    //
    // const projects = [
    //     {
    //         id: '1',
    //         title: 'DashBoard Development',
    //         status: 'open',
    //         progress: '50',
    //         deadline: '02.10.2022'
    //     },
    //
    //     {
    //         id: '2',
    //         title: 'Features Development',
    //         status: 'open',
    //         progress: '10',
    //         deadline: '11.10.2022'
    //     },
    //
    //     {
    //         id: '3',
    //         title: 'Design Development',
    //         status: 'close',
    //         progress: '100',
    //         deadline: '22.09.2022'
    //     },
    // ]

    const {removeProject, updateProjectStatus, removeTaskList} = useActions();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editData, setEditData] = useState<any>({
        isNew: false,
        projectId: '',
    });

    const removeItem = (projectId: any) => {
        removeProject(projectId);
        removeTaskList(projectId);
    };

    const createItem = () => {
        setEditData({
            isNew: true,
            projectId: '',
        })

        setIsModalOpen(true)
    }

    const editItem = (id: string) => {
        setEditData({
            ...editData,
            isNew: false,
            projectId: id
        })
        setIsModalOpen(true)
    }

    const changeStatus = (id: string) => {
        updateProjectStatus(id)
    }

    return (
        <div className="px-0 sm:px-0 lg:px-0">

            {projectList.length > 0 &&
                <>
                    <div className="sm:flex sm:items-center">
                        <div className="sm:flex-auto">
                            <p className="mt-2 text-sm text-gray-700">
                                A list of all projects available to you including their titles, users list, tags,
                                status,
                                progress and deadline.
                            </p>
                        </div>
                        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                            <button
                                onClick={() => createItem()}
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                            >
                                Add project
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
                                            <th scope="col"
                                                className="px-16 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                Deadline
                                            </th>
                                            <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                <span className="sr-only">Edit or Remove</span>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                        {projectList.map((project) => {
                                                const deadline = getNumberOfDays(new Date(), project.deadline!);

                                                return (
                                                    <tr key={project.id}>
                                                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                            {project.title}
                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">

                                                            {project.status === 'open'
                                                                ?
                                                                <span
                                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-green-100 text-green-800">
                                                    {project.status}
                                                </span>
                                                                :
                                                                <span
                                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800">
                                                    {project.status}
                                                </span>
                                                            }

                                                        </td>
                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 px-16 ">
                                                            {deadline < 1 &&
                                                                <span
                                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-red-100 text-red-800">
                                                            {deadline} day left
                                                        </span>
                                                            }
                                                            {(deadline >= 1 && deadline <= 5) &&
                                                                <span
                                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800">
                                                            {deadline} days left
                                                        </span>
                                                            }
                                                            {(deadline > 5 && deadline <= 15) &&
                                                                <span
                                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800">
                                                            {deadline} days left
                                                        </span>
                                                            }
                                                            {(deadline > 15 && deadline <= 30) &&
                                                                <span
                                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800">
                                                            {deadline} days left
                                                        </span>
                                                            }
                                                            {(deadline > 30 && deadline <= 60) &&
                                                                <span
                                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800">
                                                            {deadline} days left
                                                        </span>
                                                            }
                                                            {(deadline > 60 && deadline <= 180) &&
                                                                <span
                                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800">
                                                            {deadline} days left
                                                        </span>
                                                            }
                                                            {(deadline > 180) &&
                                                                <span
                                                                    className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-800">
                                                            {deadline} days left
                                                        </span>
                                                            }


                                                        </td>
                                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                            <button
                                                                onClick={() => changeStatus(project.id)}
                                                                className={"rounded-md py-2 pl-3 pr-3 mr-1.5 ml-1.5 " + (project.status === "open" ? "bg-green-100 hover:bg-green-200 text-green-800 " : "bg-purple-100 hover:bg-purple-200 text-purple-800")}>
                                                                {project.status === 'open' ? 'Close' : 'Open'}<span
                                                                className="sr-only">, {project.title}</span>
                                                            </button>
                                                            <button
                                                                onClick={() => editItem(project.id)}
                                                                className="rounded-md py-2 bg-blue-100   hover:bg-blue-200 text-blue-800 pl-3 pr-3 mr-1.5 ml-1.5">
                                                                Edit<span className="sr-only">, {project.title}</span>
                                                            </button>
                                                            <button
                                                                onClick={() => removeItem(project.id)}
                                                                className="rounded-md py-2 bg-red-100  hover:bg-red-200   text-red-800 pl-3 pr-3 mr-1.5 ml-1.5 ">
                                                                Remove<span className="sr-only">, {project.title}</span>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            }
            {projectList.length === 0 &&
                <div className="text-center">
                    <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            vectorEffect="non-scaling-stroke"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                        />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No projects</h3>
                    <p className="mt-1 text-sm text-gray-500">Get started by creating a new project.</p>
                    <div className="mt-6">
                        <button
                            onClick={() => createItem()}
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true"/>
                            New Project
                        </button>
                    </div>
                </div>
            }


            <Modal {...{isModalOpen, setIsModalOpen}}>
                <CreateProjectForm {...{setIsModalOpen, ...editData}}/>
            </Modal>
        </div>
    )
};

export default ProjectsList;