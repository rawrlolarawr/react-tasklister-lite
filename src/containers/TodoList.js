import '../TodoList.css'
import React, {Component} from 'react'
import Todo from '../components/Todo'

export default class TodoList extends Component {
    
    handleSubmit = (event, id) => {
        event.preventDefault()
        this.props.deleteTodo(id)
    }
    
    render() {
        return (
            <div id='list'>
                <h2>My Todos</h2>
                <ol>
                    {this.props.todos.map((todo) => <Todo key={todo.id} id={todo.id} content={todo.content} handleSubmit={this.handleSubmit}/>)}
                </ol>
            </div>
        )
    }
}