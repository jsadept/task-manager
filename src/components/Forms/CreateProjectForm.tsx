import React, {FC, useEffect, useState} from 'react';
import {Dialog} from "@headlessui/react";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {useActions} from "../../hooks/redux";
import {getRandomId} from "../../utils/getRandomId";
import {useFindProjectById} from "../../hooks/project";


interface CreateProjectFormProps {
    setIsModalOpen: (value: boolean) => void;
    isNew?: boolean;
    projectId?: string;
}

const CreateProjectForm: FC<CreateProjectFormProps> = ({setIsModalOpen, isNew = true, projectId = undefined}) => {


    const {createProject, updateProject, createTaskList} = useActions();

    const currentProject = useFindProjectById(projectId!);


    const [editData, setEditData] = useState<any>({
        title: '',
        status: 'open',
        deadline: new Date(),
    });

    const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (isNew) {
            const newProjectId = getRandomId();
            createProject({id: newProjectId, ...editData});
            createTaskList(newProjectId);
            setIsModalOpen(false);
        } else {
            updateProject({id: projectId, ...editData});
            setIsModalOpen(false);
        }
    }

    const closeModal = () => {
        setEditData({
            title: '',
            status: 'open',
            deadline: new Date(),
        });
        setIsModalOpen(false);
    }

    useEffect(() => {
        if (currentProject && isNew === false) {
            setEditData({
                id: currentProject.id,
                title: currentProject.title,
                status: currentProject.status,
                deadline: currentProject.deadline,
            });
        }
    }, [isNew, projectId, currentProject])


    return (
        <>
            <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                {isNew ? 'Create' : 'Edit'} project
            </Dialog.Title>
            <div className="mt-2">

                <form className="mt-6 space-y-8 divide-y-blue-gray-100">
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6 w-full">
                        <div className="sm:col-span-6">
                            <p className="mt-1 text-sm text-blue-gray-500">
                                {isNew ? 'Create' : 'Edit'} new project.
                            </p>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="first-name"
                                   className="block text-sm font-medium text-blue-gray-900  p-2">
                                Project title
                            </label>
                            <input
                                onChange={(e) => setEditData({...editData, title: e.target.value})}
                                value={editData.title}
                                type="text"
                                name="task-title"
                                id="task-title"
                                defaultValue={editData.title || undefined}
                                placeholder="Enter task title..."
                                autoComplete="given-name"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 p-4"
                            />
                        </div>


                        <div className="sm:col-span-6">
                            <label htmlFor="first-name"
                                   className="block text-sm font-medium text-blue-gray-900  p-2">
                                Deadline
                            </label>
                            <DatePicker
                                minDate={new Date()}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 p-4"
                                shouldCloseOnSelect={true}
                                selected={editData.deadline}
                                value={editData.deadline || undefined}
                                onChange={(date: Date) => setEditData({...editData, deadline: date})}/>
                        </div>


                    </div>

                    <div className="pt-8 flex justify-end">
                        <button
                            onClick={closeModal}
                            type="button"
                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={(e) => submitHandler(e)}
                            type="submit"
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            {isNew ? 'Add' : 'Save'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateProjectForm;