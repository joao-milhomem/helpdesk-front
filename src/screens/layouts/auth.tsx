import { Outlet } from "react-router";

export function AuthLayout() {
	return (
		<div>
			<div>Branding</div>

			<div>
				<Outlet />
			</div>
		</div>
	);
}
