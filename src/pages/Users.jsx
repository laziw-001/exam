import { useEffect, useState } from 'react'

export default function UsersList() {
	const [users, setUsers] = useState()

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => setUsers(data))
	}, [])

	if (!users) {
		return <h3>Loading...</h3>
	}

	return (
		<div className='parent'>
			<style>{`
			.parent {
				display: flex;
				flex-wrap:wrap;
				gap: 8px;
				justify-content: center;
			}
        .card {
          border: 1px solid gray;
          border-radius: 8px;
          padding: 30px 10px;
          margin: 5px 0;
					width: 500px;

        }
        .name {
          
          font-weight: bold;
        }
        .email {
          margin: 0;
        }
        .loading {
          text-align: center;
        }
      `}</style>
			{users.map(user => (
				<div key={user.id} className='card'>
					<div className='name'>{user.name}</div>
					<p className='email'>{user.email}</p>
				</div>
			))}
		</div>
	)
}
