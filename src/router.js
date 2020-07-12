import Home from './component/Home/index.jsx';
import User from './component/User/index.jsx';
import Main from './component/User/Main.jsx';
import Info from './component/User/Info.jsx';
import Login from './component/Login/index.jsx';
import Notfound from './component/Notfound/index.jsx';



let routes = [
    {
        path: '/',//首页默认加载的页面
        component: Home,
        exact: true //是否为严格模式
    },
    {
        path: '/user',
        component: User,
        routes: [  /** 嵌套路由  User下面又有两个子页面*/
            {
                path: '/user/ger',
                component: Main,
            },
            {
                path: '/user/info/:obj',
                component: Info
            }
        ]
    },
    {
        path: '/Login',//首页默认加载的页面
        component: Login,
        exact:true
    },
    {
        path:'*',
        component:Notfound,
        exact:true
    }
];

export default routes;