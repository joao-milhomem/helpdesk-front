import './index.css'

import { BrowserRouter } from 'react-router'

import { AuthRoutes } from './routes/auth-routes'

export function App() {
	return (
		<BrowserRouter>
			<AuthRoutes />
		</BrowserRouter>
	)
}
