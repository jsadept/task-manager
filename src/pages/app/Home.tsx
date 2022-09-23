import React from 'react';
import PageName from "../../components/Layout/Page/PageName";
import PageContent from "../../components/Layout/Page/PageContent";
import AppLayout from "../../components/Layout/AppLayout";

const Home = () => {
    return (
        <AppLayout>
            <PageName>Dashboard</PageName>
            <PageContent>test</PageContent>
        </AppLayout>
    );
};

export default Home;