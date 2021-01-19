import '../Todo.css'

const Todo = props => {
    return <li className='Todo' key={props.id}>{props.content} <button onClick={(e) => props.handleSubmit(e, props.id)}>X</button></li>
}

export default Todo