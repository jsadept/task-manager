import React, {FC, ReactNode} from 'react';


interface MainProp {
    children: ReactNode;
}

const Main: FC<MainProp> = ({children}) => {
    return (
        <main className="flex-1">
            <div className="py-6">
                {children}
            </div>
        </main>
    );
};

export default Main;