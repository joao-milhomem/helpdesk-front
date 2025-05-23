import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

const root = document.getElementById("root");

if (!root) {
	throw new Error("App can't be launched");
}

createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
