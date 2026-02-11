import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id:1,
        text: "Hello world"
    }]
}  //can be array or object

export const todoSlice = createSlice({
    name: 'todo',
    initialState,                       // we have to provide the initialState. we can also declare this here itself but we did it aove so no nedd to do.
    reducers: {
        addTodo: (state, action)=>{
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },     // these are same as the context api but the only difference is that we have to provide the declareation to this as well. here we have access to 2 things: state(the hand to hand situation of the initial values ) and action(the values that will be required to make any change)
        removeTodo: (state, action)=>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        updateTodo: (state,action) =>{
            state.todos = state.todos.map((todo) => {todo.id === action.payload? action.payload : todo })
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer