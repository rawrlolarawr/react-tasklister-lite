import '../TodoList.css'
import Todo from './Todo'
import FormContainer from '../containers/FormContainer'

const TodoList = props => {
    return (
        <div id='list'>
            <h3>{props.title}</h3>
            <FormContainer addTodo={props.addTodo}/>
            <ol>
                {props.todos.map((todo) => <Todo key={todo.id} id={todo.id} content={todo.content} handleSubmit={props.handleSubmit}/>)}
            </ol>
        </div>
    )
}

export default TodoList