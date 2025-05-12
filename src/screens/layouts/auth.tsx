import { Outlet } from 'react-router'

export function AuthLayout() {
	return (
		<div className="flex min-h-screen ">
			<div className="grid flex-1 place-content-center bg-secondary">
				<p>Login</p>
			</div>

			<div className="grid flex-1 place-content-center">
				<Outlet />
			</div>
		</div>
	)
}
