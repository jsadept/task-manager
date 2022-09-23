import React, {useEffect} from 'react';
import PageName from "../../components/Layout/Page/PageName";
import PageContent from "../../components/Layout/Page/PageContent";
import ProjectsList from "../../components/Projects/ProjectsList";
import {useTypedSelector} from "../../hooks/redux";
import AppLayout from "../../components/Layout/AppLayout";

const Projects = () => {

    const {projectList} = useTypedSelector(state => state.projects);

    useEffect(() => {
        console.log(projectList)
    }, [projectList])

    return (
        <AppLayout>
            <PageName>Projects</PageName>
            <PageContent>

                <ProjectsList {...{projectList}}/>

            </PageContent>
        </AppLayout>
    );
};

export default Projects;