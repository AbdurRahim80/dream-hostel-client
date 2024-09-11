import { createBrowserRouter } from "react-router-dom";
import LayOut from "../layout/LayOut";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import MyBookings from "../pages/MyBookings";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import PrivateRoute from "./PrivateRoute";
import About from "../pages/About";
import Contact from "../pages/Contact";
import RoomsDetails from "../components/RoomsDetails";
import UpdateBooking from "../pages/UpdateBooking";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayOut/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: ()=> fetch('https://dream-hostel-server.vercel.app/rooms')
            },
            {
                path:'/rooms',
                element:<PrivateRoute> <Rooms/></PrivateRoute>,
                loader: ()=> fetch('https://dream-hostel-server.vercel.app/rooms')
            },
            {
                path:'/mybookings',
                element: <PrivateRoute><MyBookings/></PrivateRoute>
            },
            {
                path:'/signup',
                element: <SignUp/>
            },
            {
                path:'/signin',
                element: <SignIn/>
            },
            {
                path:'/about',
                element: <About/>
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path:'/roomdetail/:id',
                element: <RoomsDetails/>,
                loader: ({params})=> fetch(`https://dream-hostel-server.vercel.app/rooms/${params?.id}`)
            },
            {
                path: '/update',
                element: <UpdateBooking/>
            }
        ]
    }
])

export default router;