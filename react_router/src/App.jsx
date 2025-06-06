import './App.css'
import { Link, Route, Routes} from 'react-router-dom'
import Home from './Containainers/Home/Home'
import Info from './Containainers/Info/Info'
import Rules from './Containainers/Rules/Rules'
import UserPages from './Containainers/UsersPages'

function App() {
  return (
    <>
    <nav>
    <Link to="/">Добро пожаловать</Link> | <Link to="/info">Информация</Link> | <Link to="/rules">Правила</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/info' element={<Info/>}></Route>
      <Route path='/rules' element={<Rules/>}></Route>
      <Route path={`/users/:id`} element = {<UserPages/>}></Route>
    </Routes>
    </>
  )
}

export default App
