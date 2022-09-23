import React, {useEffect} from 'react';
import {useActions} from "../../hooks/redux";
import {useNavigate} from "react-router-dom";
import {RouteNames} from "../../router/routes/routes";

const Logout = () => {

    const navigate = useNavigate();

    const {logout} = useActions();
    console.log('asdad')
    useEffect(() => {
        logout()
        navigate(RouteNames.LOGIN)
    }, [])
    return (
        <div>

        </div>
    );
};

export default Logout;