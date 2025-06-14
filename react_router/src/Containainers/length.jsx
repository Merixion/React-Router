import { useSearchParams } from 'react-router-dom';
import { users } from '../data/users';
import { Link } from 'react-router-dom';

export function Length() {
	const [params] = useSearchParams();
	const lengthParam = params.get('length');

	const filteredUsers = lengthParam
		? users.filter(user => user.name.length === +lengthParam)
		: users;

	return (
		<div>
			<ul>
				{filteredUsers.map(el => (
					<li key={el.id}>
						<Link to={`/users/${el.id}`}>{el.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
