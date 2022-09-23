import React from 'react';
import PageName from "../../components/Layout/Page/PageName";
import PageContent from "../../components/Layout/Page/PageContent";
import AppLayout from "../../components/Layout/AppLayout";

const Profile = () => {
    return (
        <AppLayout>
            <PageName>Account</PageName>
            <PageContent>


                {/* Main content */}
                <div className="flex-1 xl:overflow-y-auto">
                    <div className="max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-0 lg:px-8">


                        <form className="mt-6 space-y-8 divide-y divide-y-blue-gray-200">
                            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                                <div className="sm:col-span-6">
                                    <h2 className="text-xl font-medium text-blue-gray-900">Profile</h2>
                                    <p className="mt-1 text-sm text-blue-gray-500">
                                        This information will be displayed publicly so be careful what you share.
                                    </p>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="first-name"
                                           className="block text-sm font-medium text-blue-gray-900  p-2">
                                        First name
                                    </label>
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        defaultValue="Tom"
                                        autoComplete="given-name"
                                        className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 p-4"
                                    />
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="last-name"
                                           className="block text-sm font-medium text-blue-gray-900 p-2">
                                        Last name
                                    </label>
                                    <input
                                        type="text"
                                        name="last-name"
                                        id="last-name"
                                        defaultValue="Carry"
                                        autoComplete="family-name"
                                        className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 p-4"
                                    />
                                </div>

                                <div className="sm:col-span-6">
                                    <label htmlFor="username"
                                           className="block text-sm font-medium text-blue-gray-900  p-2">
                                        Username
                                    </label>
                                    <div className="mt-1 flex rounded-md shadow-sm">
                            <span
                                className="p-3 font-bold inline-flex items-center rounded-l-md border border-r-0 border-blue-gray-300 bg-blue-gray-50 text-blue-gray-500 sm:text-sm">
                              task-manager.com/
                            </span>
                                        <input
                                            type="text"
                                            name="username"
                                            id="username"
                                            autoComplete="username"
                                            defaultValue="tom777"
                                            className="flex-1 block w-full min-w-0 border-blue-gray-300 rounded-none rounded-r-md text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500  p-4"
                                        />
                                    </div>
                                </div>

                            </div>

                            <div className="pt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6">
                                <div className="sm:col-span-6">
                                    <h2 className="text-xl font-medium text-blue-gray-900">Personal Information</h2>
                                    <p className="mt-1 text-sm text-blue-gray-500">
                                        This information will be displayed publicly so be careful what you share.
                                    </p>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="email-address"
                                           className="block text-sm font-medium text-blue-gray-900 p-2">
                                        Email address
                                    </label>
                                    <input
                                        type="text"
                                        name="email-address"
                                        id="email-address"
                                        autoComplete="email"
                                        defaultValue="tom777@gmail.com"
                                        className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 p-4"
                                    />
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="phone-number"
                                           className="block text-sm font-medium text-blue-gray-900 p-2">
                                        Phone number
                                    </label>
                                    <input
                                        type="text"
                                        name="phone-number"
                                        id="phone-number"
                                        autoComplete="tel"
                                        defaultValue="+955-555-55-55"
                                        className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 p-4"
                                    />
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="country"
                                           className="block text-sm font-medium text-blue-gray-900 p-2">
                                        Country
                                    </label>
                                    <select
                                        id="country"
                                        name="country"
                                        defaultValue={3}
                                        autoComplete="country-name"
                                        className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 p-4"
                                    >
                                        <option value={1}>United States</option>
                                        <option value={2}>Canada</option>
                                        <option value={3}>UK</option>
                                    </select>
                                </div>

                                <div className="sm:col-span-3">
                                    <label htmlFor="language"
                                           className="block text-sm font-medium text-blue-gray-900 p-2">
                                        Language
                                    </label>
                                    <input
                                        type="text"
                                        name="language"
                                        id="language"
                                        defaultValue="english"
                                        className="mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500 p-4"
                                    />
                                </div>

                                <p className="text-sm text-blue-gray-500 sm:col-span-6">
                                    This account was created on{' '}
                                    <time dateTime="2017-01-05T20:35:40">January 5, 2017, 8:35:40 PM</time>
                                    .
                                </p>
                            </div>

                            <div className="pt-8 flex justify-end">
                                <button
                                    type="button"
                                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </PageContent>
        </AppLayout>
    );
};

export default Profile;