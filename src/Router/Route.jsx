
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import Donations from '../pages/Donations/Donations';
import Statistics from '../pages/Statistics/Statistics';
import DonationDetails from '../pages/DonationDetails/DonationDetails';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/donation.json'),
            },
            {
                path: '/donations',
                element: <Donations></Donations>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            },
            {
                path: '/donation/:id',
                element: <DonationDetails></DonationDetails>,
                loader: () => fetch('/donation.json'),
            }
        ],
    }
]);

export default myCreatedRoute;