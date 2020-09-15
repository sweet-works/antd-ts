import React from 'react';
import Home from '../components/pages/Home';
import Detail from '../components/pages/Detail';
import NotFound from '../components/pages/NotFound';
import ServerError from '../components/pages/ServerError';
const Routers = [
    { 'id': 'Home', 'path': '/home', 'component': Home },
    { 'id': 'Order', 'path': '/detail', 'component': Detail },
    { 'id': 'ServiceUnavailable', exact: true, 'path': '/503', 'component': ServerError },
    { 'id': 'NotFound', 'component': NotFound },
];

export default Routers;