import React, { Component } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from './TodoList'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from '../actions/TodoActions'

class TodoContainer extends Component {
    addTodo = newTodo => {
        this.props.dispatch(addTodo(newTodo))
    }

    deleteTodo = id => {
        this.props.dispatch(removeTodo(id))
    }

    render() {
        return (
            <div>
                <TodoForm addTodo={this.addTodo} />
                <TodoList todos={this.props.todos} deleteTodo={this.deleteTodo} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoContainer)