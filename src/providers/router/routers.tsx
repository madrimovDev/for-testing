import { createBrowserRouter } from "react-router-dom";
import ProtectAuth from "../../pages/core/ProtectAuth";
import Login from "../../pages/Login";
import Home from "../../pages/Home";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <ProtectAuth />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
	{
		path: "login",
		element: <Login />,
	},
]);

