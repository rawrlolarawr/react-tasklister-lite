import React, { Component } from 'react'
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from '../actions/TodoActions'


class TodoContainer extends Component {
    addTodo = newTodo => {
        this.props.dispatch(addTodo(newTodo))
        const configObj = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newTodo)
        }

        fetch('http://localhost:3001/tasks', configObj)
    }

    deleteTodo = id => {
        this.props.dispatch(removeTodo(id))
        const todo = this.props.todos.find(td => td.key === id)
        const configObj = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        }

        fetch('http://localhost:3001/tasks/' + todo.id, configObj)
    }

    renderTodos = todoObj => {
        return todoObj.data.map(todo => {
            return this.props.dispatch(addTodo(todo.attributes))
        })
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