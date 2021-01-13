import React, { Component } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from './TodoList'

export default class FormContainer extends Component {
    constructor() {
        super()

        this.state = {
            todos: []
        }
    }

    addTodo = newTodo => {
        this.setState(state => {
            const todos = [...state.todos, newTodo]
            return {todos}
        })
    }

    deleteTodo = id => {
        this.setState(state => {
            const todos = state.todos.filter(item => item.id !== id)
            return {todos}
        })
    }

    render() {
        return (
            <div>
                <TodoForm addTodo={this.addTodo} />
                <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} />
            </div>
        )
    }
}