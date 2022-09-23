import React, {FC, ReactNode} from 'react';


interface PageNameProp {
    children: ReactNode;
}

const PageName: FC<PageNameProp> = ({children}) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-3xl font-bold text-blue-gray-900">{children}</h1>
        </div>
    );
};

export default PageName;