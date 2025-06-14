import { Link, useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import { users } from '../../data/users';

function Home() {
	const navigate = useNavigate();

	return (
		<>
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
				<button className={styles.navigate} onClick={() => navigate('/info')}>
					Информация
				</button>
			</div>
			<div className={styles.colectionButtons}>
				<nav>
					<Link
						to='/?length=5'
						className={`${styles.filterLength} ${styles.length5}`}
					>
						Длинна 5
					</Link>
					<br></br>
					<Link
						to='/?length=6'
						className={`${styles.filterLength} ${styles.length6}`}
					>
						Длинна 6
					</Link>
				</nav>
			</div>
		</>
	);
}

export default Home;
