import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RootProvider } from "./providers";

const rootContainer = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(rootContainer);

const app = (
	<React.StrictMode>
		<RootProvider />
	</React.StrictMode>
);

root.render(app);

