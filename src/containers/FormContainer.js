import React, { Component } from 'react'
import {v4 as uuid } from 'uuid'
import TodoForm from '../components/TodoForm'

export default class FormContainer extends Component {
    state = {
        value: '',
        todo: {}
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState(state => {
            return ({
                value: '',
                todo: {
                    key: uuid(),
                    content: this.state.value
                }
            })
        }, () => this.props.addTodo(this.state.todo))
    }

    render() {
        return (
            <TodoForm value={this.state.value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
        )
    }
}