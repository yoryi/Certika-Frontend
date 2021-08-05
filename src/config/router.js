import LayoutBasic from '../layouts/layoutBasic';
import LayoutPro from '../layouts/layoutPro';

//404
import Error404 from '../pages/404';

//Pages
import Dasboard from '../pages/Dasboard';
import Dasboard2 from '../pages/Dasboard2';
import Cargando from '../pages/cargando';

const routes = [
    {
        path: "/Dasboard",
        component: LayoutPro,
        exact: false,
        routes: [
            {
                path: "/Dasboard",
                component: Dasboard,
                exact: true
            },
            {
                component: Error404
            }
        ]
    },
    {
        path: "/Dasboard2",
        component: LayoutPro,
        exact: false,
        routes: [
            {
                path: "/Dasboard2",
                component: Dasboard2,
                exact: true
            },
            {
                component: Error404
            }
        ]
    },
    {
        path: '/',
        component: LayoutBasic,
        exact: false,
        routes: [
            {
                path: '/',
                component: Cargando,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
]

export default routes;