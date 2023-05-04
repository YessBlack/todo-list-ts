import { type TodoTitle } from '../types/types'
import { CreateTodo } from './CreateTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header className="header">
      <h1>
        todo
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="typescript"
          style={{ width: '60px', height: 'auto' }}
           />
      </h1>
      <CreateTodo saveTodo={onAddTodo} />
    </header>
  )
}
