import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  const users = [
		{ id: 1, name: 'Maxim' },
		{ id: 2, name: 'Masha' },
		{ id: 199, name: 'misha' },
	];
	return (
		<div>
			<h1>Добро пожаловать</h1>
      <ul>
        {users.map(user =>{
          <li key = {user.id}><Link to = {`/users/${user.id}`}>user.name</Link></li>
        })}
      </ul>
		</div>
	);
}

export default Home;
