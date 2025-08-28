import React from 'react'

export default function Counter() {
	const [count, setCount] = React.useState(0)

	return (
		<div>
			<style>
				{`
				body {
					font-family: Arial, sans-serif;
					text-align: center;
					background-color: #f0f0f0;
				}
					button {
						width: 50px;
						height: 50px;
						font-size: 20px;
					}
					p {
						display: inline-block;
						margin: 0 20px;
						font-size: 25px;
					}
				`}
			</style>
			<h1>Counter</h1>
			<button onClick={() => setCount(count + 1)}>+</button>
			<p>{count}</p>
			<button onClick={() => count > 0 && setCount(count - 1)}>-</button>
		</div>
	)
}
