import React, { Component } from 'react'
import {v4 as uuid } from 'uuid'

export default class TodoForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            todo: {}
        }
    }

    handleChange = (event) => {
        this.setState({value: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState(state => {
            const todo = {
                id: uuid(),
                content: this.state.value
            }

            return ({
                value: '',
                todo: todo
            })
        }, () => this.props.addTodo(this.state.todo))
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Task description:
                        <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='description' />
                    </label>
                    <input type='submit' value='Create New Task' onClick={this.handleSubmit} />          
                </form>
            </div>
        )
    }
}