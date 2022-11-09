import Home from './pages/Home';
import CreateAd from './pages/CreateAd';
import AdDetails from './pages/AdDetails';
import UpdateAd from './pages/UpdateAd';
import PATH from './AppPaths';

const AppRoutes = [
    {
        index: true,
        element: <Home />,
    },
    {
        path: PATH.CreateAd,
        element: <CreateAd />,
    },
    {
        path: PATH.UpdateAd,
        element: <UpdateAd />,
    },
    {
        path: PATH.LogIn,
        element: <Home />,
    },
    {
        path: PATH.SignIn,
        element: <Home />,
    },
    {
        path: PATH.AdDetails,
        element: <AdDetails />,
    },
];

export default AppRoutes;
