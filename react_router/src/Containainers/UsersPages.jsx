import { useParams } from "react-router-dom";
import { users } from '../data/users';


export default function UserPages(){
  const {id} = useParams();
  const user = users.find(user => user.id === Number(id));

  return (
		<div>
			<h1>Информация о пользователе</h1>
			<p>Имя: {user.name}</p>
			<p>ID: {user.id}</p>
			<p>Возраст: {user.age}</p>
		</div>
	);

}

