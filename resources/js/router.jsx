import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import GuestLayout from "./components/Layout/GuestLayout";
import ProtectedLayout from "./components/Layout/ProtectedLayout";
import About from "./pages/About";

const router = createBrowserRouter([
    {
		path: '/',
		element: <GuestLayout />,
		children: [
			{
				// path: '/',
                index: true,
				element: <Login />,
			},
			{
				path: '/about',
				element: <About />,
			},
		],
	},
    {
		path: '/',
		element: <ProtectedLayout />,
		children: [
			{
				path: '/home',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
		],
	},
])

export default router