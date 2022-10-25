import { FetchData } from './components/FetchData';
import { Home } from './pages/Home';
import CreateAd from './pages/CreateAd';
import AppPaths from './AppPaths';

const AppRoutes = [
    {
        index: true,
        element: <Home />,
    },
    {
        path: AppPaths.CreateAd,
        element: <CreateAd />,
    },
    {
        path: AppPaths.LogIn,
        element: <CreateAd />,
    },
    {
        path: AppPaths.SignIn,
        element: <CreateAd />,
    },
    // {
    //     path: '/fetch-data',
    //     element: <FetchData />,
    // },
];

export default AppRoutes;
