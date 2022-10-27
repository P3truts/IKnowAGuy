// import { FetchData } from './components/FetchData';
import { Home } from './pages/Home';
import CreateAd from './pages/CreateAd';
import { AdDetails } from './pages/AdDetails';
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
        element: <Home />,
    },
    {
        path: AppPaths.SignIn,
        element: <Home />,
    },
    {
        path: AppPaths.AdDetails,
        element: <AdDetails />,
    },
    // {
    //     path: '/fetch-data',
    //     element: <FetchData />,
    // },
];

export default AppRoutes;
