import React, { Component } from 'react'
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { addTodo, removeTodo } from '../actions/TodoActions'


class TodoContainer extends Component {
    addTodo = newTodo => {
        this.props.dispatch(addTodo(newTodo))
    }

    deleteTodo = id => {
        this.props.dispatch(removeTodo(id))
    }

    handleSubmit = (event, id) => {
        event.preventDefault()
        this.deleteTodo(id)
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