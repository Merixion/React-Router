import { useParams } from "react-router-dom";

export default function UserPages(){
  const {id} = useParams();
  return (
    <div>
      <h1>Информация о пользователе</h1>
      <p>ID: {id}</p>
    </div>
  );

}