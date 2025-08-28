import { createBrowserRouter } from 'react-router'
import RootLayout from '../layouts/RootLayout'
import Counter from '../pages/Counter'
import Home from '../pages/Home'
import Users from '../pages/Users'

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: 'counter', element: <Counter /> },
			{ path: 'users', element: <Users /> },
		],
	},
])
