import React, {FC, ReactNode} from 'react';


interface PageContentProp {
    children: ReactNode;
}

const PageContent: FC<PageContentProp> = ({children}) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8">
            {children}
        </div>
    );
};

export default PageContent;

