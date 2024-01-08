import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

export default function Router() {
	return <RouterProvider router={router} />;
}
