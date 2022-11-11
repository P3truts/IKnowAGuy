import Home from './pages/Home';
import CreateAd from './pages/CreateAd';
import AdDetails from './pages/AdDetails';
import UpdateAd from './pages/UpdateAd';
import PATH from './AppPaths';
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';

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
        element: <Login />,
    },
    {
        path: PATH.SignIn,
        element: <Register />,
    },
    {
        path: PATH.AdDetails,
        element: <AdDetails />,
    },
    {
        path: PATH.LogOut,
        element: <Logout />
    }
];

export default AppRoutes;
