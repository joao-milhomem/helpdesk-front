import { Outlet } from "react-router";

export function DefaultLayuot() {
	return (
		<div>
			<header>Header</header>

			<div>
				<Outlet />
			</div>
		</div>
	);
}
