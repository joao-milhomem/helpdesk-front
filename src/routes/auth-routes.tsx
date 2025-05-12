import { SignUp } from '@/screens/auth/sign-up'
import { Route, Routes } from 'react-router'
import { SignIn } from '../screens/auth/sign-in'
import { AuthLayout } from '../screens/layouts/auth'

export function AuthRoutes() {
	return (
		<Routes>
			<Route path="/" element={<AuthLayout />}>
				<Route path="" element={<SignIn />} />
				<Route path="sign-up" element={<SignUp />} />
			</Route>
		</Routes>
	)
}
