export const addTodo = todo => {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}

export const removeTodo = key => {
    return {
        type: 'REMOVE_TODO',
        payload: key
    }
}