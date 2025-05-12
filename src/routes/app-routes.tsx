import { Route, Routes } from "react-router";
import { Home } from "../screens/app/home";
import { DefaultLayuot } from "../screens/layouts/default";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayuot />}>
				<Route path="" element={<Home />} />
			</Route>
		</Routes>
	);
}
