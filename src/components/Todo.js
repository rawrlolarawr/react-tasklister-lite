import '../Todo.css'

const Todo = props => {
    return <li className='Todo' key={props.childKey}>{props.content} <button onClick={(e) => props.handleSubmit(e, props.childKey)}>X</button></li>
}

export default Todo