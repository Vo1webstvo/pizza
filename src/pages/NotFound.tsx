import React from 'react';
import PageNotFound from "../components/404/404";

const NotFound: React.FC = () => {
    return (
        <>
            <h1>Ничего не найдено :(</h1>
            <PageNotFound/>
        </>
    );
};

export default NotFound;