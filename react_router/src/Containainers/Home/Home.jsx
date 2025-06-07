import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import {users} from '../../data/users'

function Home() {
	return (
		<div className={styles.Home}>
			<h1>Добро пожаловать</h1>
			<ul>
				{users.map(user => (
					<li key={user.id}>
						<Link to={`/users/${user.id}`} className={styles.names}>
							{user.name}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Home;
