/*
 * @Autor: yaojie
 * @Date: 2020-09-15 19:11:14
 * @LastEditors: yaojie
 * @LastEditTime: 2020-09-16 08:41:35
 * @Description: '路由配置'
 */
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