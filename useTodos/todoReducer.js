export const todoReducer = ( initialState = [], action ) => {

    switch ( action.type ) {
        case '[Todo] Add todo':
            return [ ...initialState, action.payload ]

        case '[Todo] Remove todo':
            return initialState.filter( todo => todo.id !== action.payload );

        case '[Todo] Toggle todo':
            return initialState.map( todo => {
                if ( todo.id === action.payload ) { //id
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } 
                return todo;
            } );

        default:
            return initialState;
    }

}
