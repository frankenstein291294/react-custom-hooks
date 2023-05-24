import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

export const useTodos = () => {

    const intialState = [];

    const init = () => {
        return JSON.parse( localStorage.getItem( 'todos' ) ) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, intialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])

    const handleNewTodo = ( todo ) => {
        const action =  {
            type: '[Todo] Add todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[Todo] Remove todo',
            payload: id,
        })
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[Todo] Toggle todo',
            payload: id,
        })
    }


    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length
    }
}
