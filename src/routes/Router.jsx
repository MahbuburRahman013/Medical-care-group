import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home/Home';
import AboutUs from '../pages/AboutUs/AboutUs';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Services from '../pages/Services/Services';
import Doctors from '../pages/Doctors/Doctors';
import News from '../pages/News/News';
import Contact from '../pages/Contact/Contact';
import SingleNews from '../pages/News/SingleNews';
import DashboardLayout from '../layout/DashboardLayout';
import DashboardHome from '../pages/Dashboard/DashboardHome/DashboardHome';
import Appointment from '../pages/Appointment/Appointment';

const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
         {
            path: '/',
            element: <Home />,
         },
         {
            path: "/about",
            element: <AboutUs />
         },
         {
            path: "/services",
            element: <Services />
         },
         {
            path: "/doctors",
            element: <Doctors />
         },
         {
            path: "/news",
            element: <News />
         },
         {
            path: "/news/:id",
            element: <SingleNews />
         },
         {
            path: "/contact",
            element: <Contact />
         },
         {
            path: "/appointment",
            element: <Appointment />
         }
      ],
   },
   {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
         {
            index: true,
            element: <DashboardHome />
         }
      ]
   }
]);

export default router;
