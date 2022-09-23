import React, {FC, useEffect, useState} from 'react';
import {Dialog} from "@headlessui/react";
import {useActions} from "../../hooks/redux";
import {getRandomId} from "../../utils/getRandomId";
import {TaskData} from "../../types";

interface CreateTaskFormProps {
    setIsModalOpen: (value: boolean) => void;
    isNew?: boolean;
    currentProject: TaskData;
    currentTaskData?: {
        isNew?: boolean;
        id: string;
        status?: string;
        title?: string;
    }
}

const CreateTaskForm: FC<CreateTaskFormProps> = ({setIsModalOpen, isNew = true, currentProject, currentTaskData}) => {
    const {createTask, updateTask} = useActions();

    const [editData, setEditData] = useState<any>({
        title: '',
        status: 'open',
    });

    const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (currentTaskData!.isNew) {
            const newTaskId = getRandomId();
            const taskData = {id: newTaskId, ...editData};

            createTask(taskData, currentProject.id!);
        } else {
            updateTask(editData, currentProject.id!)
        }

        closeModal();
    }

    const closeModal = () => {
        setEditData({title: '', status: 'open'});
        setIsModalOpen(false);
    }

    useEffect(() => {
        if (currentTaskData!.isNew === false) {
            setEditData({
                ...currentTaskData
            });
        }
    }, [])

    return (
        <>
            <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                {currentTaskData!.isNew ? 'Create' : 'Edit'} Task
            </Dialog.Title>
            <div className="mt-2">

                <form className="mt-6 space-y-8 divide-y-blue-gray-100">
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6 w-full">
                        <div className="sm:col-span-6">
                            <p className="mt-1 text-sm text-blue-gray-500">
                                {currentTaskData!.isNew ? 'Create' : 'Edit'} new task to current project.
                            </p>
                        </div>

                        <div className="sm:col-span-6">
                            <label htmlFor="first-name"
                                   className="block text-sm font-medium text-blue-gray-900  p-2">
                                Task title
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
                            onClick={submitHandler}
                            type="submit"
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            {currentTaskData!.isNew ? 'Add' : 'Save'}
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default CreateTaskForm;