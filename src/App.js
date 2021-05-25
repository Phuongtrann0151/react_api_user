import Hearder from '../src/components/Layout/Header.js'
import Footer from '../src/components/Layout/Footer.js'
import TodoList from '../src/components/TodoList/Todo.jsx'

export default function App() {
  return (
    <div className="App">
      <Hearder/>
      <TodoList/>
      <Footer/>
    </div>
  )
}