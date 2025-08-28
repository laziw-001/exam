import React from 'react'

export default function Header() {
	return (
		<header>
			<style>
				{`
					header {
						background-color: #282c34;
						padding: 20px;
						color: white;
						text-align: center;
						margin-bottom: 20px;
					}
					nav a {
						color: white;
						margin: 0 15px;
						text-decoration: none;
						font-size: 18px;
					}
					nav a:hover {
						text-decoration: underline;
					}
				`}
			</style>
			<nav>
				<a href='/'>Home</a>
				<a href='/counter'>Counter</a>
				<a href='/users'>Users</a>
			</nav>
		</header>
	)
}
