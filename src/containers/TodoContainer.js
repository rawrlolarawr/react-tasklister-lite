import React, { Component } from 'react'
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from '../actions/TodoActions'


class TodoContainer extends Component {
    addTodo = newTodo => {
        fetch('http://localhost:3001/tasks', this.createConfigObj('POST', newTodo))
        this.props.dispatch(addTodo(newTodo))
    }

    deleteTodo = key => {
        this.props.dispatch(removeTodo(key))
        const todo = this.props.todos.find(td => td.key === key)
        fetch('http://localhost:3001/tasks/' + key, this.createConfigObj('DELETE', todo))
    }

    createConfigObj = (method, body) => {
        return {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    }

    renderTodos = todoObj => {
        return todoObj.data.map(todo => this.props.dispatch(addTodo(todo.attributes)))
    }

    handleSubmit = (event, id) => {
        event.preventDefault()
        this.deleteTodo(id)
    }

    componentDidMount() {
        fetch('http://localhost:3001/tasks')
            .then(res => res.json())
            .then(todos => {
                return this.renderTodos(todos)
            })
    }

    render() {
        return (
            <div>
                <TodoList title='My Todos' todos={this.props.todos} addTodo={this.addTodo} handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoContainer)