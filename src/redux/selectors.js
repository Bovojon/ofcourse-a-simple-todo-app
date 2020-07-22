import { VISIBILITY_FILTERS } from "../constants";

// Get all the todo state object which consists of allIds list and byIds object
export const getTodosState = store => store.todos;

// Get a list of todo ids
export const getTodoList = store => getTodosState(store) ? getTodosState(store).allIds : [];

// Get a todo by its id
export const getTodoById = (store, id) => getTodosState(store) ? {...getTodosState(store).byIds[id], id} : {};

// Gets the todos
export const getTodos = store => getTodoList(store).map(id => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    const allTodos = getTodos(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter(todo => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter(todo => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos;
    }
};