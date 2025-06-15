import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Home.module.css';
import { users } from '../../data/users';

function Home() {
	const navigate = useNavigate();
	const [params] = useSearchParams();
	const lengthParam = params.get('length');

	const filteredUsers = lengthParam
		? users.filter(user => user.name.length === +lengthParam)
		: users;


	return (
		<>
			<div className={styles.Home}>
				<h1>Добро пожаловать</h1>
				<ul>
					{filteredUsers.map(user => (
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
						Длина 5
					</Link>
					<br></br>
					<Link
						to='/?length=6'
						className={`${styles.filterLength} ${styles.length6}`}
					>
						Длина 6
					</Link>
					<Link
						to='/?length='
						className={`${styles.filterLength} ${styles.length0}`}
					>
						Сброс
					</Link>
				</nav>
			</div>
		</>
	);
}

export default Home;
