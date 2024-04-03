import {createSlice,nanoid} from '@reduxjs/toolkit'

const initialState={Todos:[{
    id:1,
    text:"Where is Argentina"}]
}

const slicerReducer=createSlice({

    name:"todo",

    initialState,

    reducers:{

        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.Todos.push(todo)
        },

        removeTOdo: (state,action)=>{

          state.Todos=  state.Todos.filter((todo)=> todo.id !== action.payload
        
        )},

    
        upadateText :(state,action)=>{
            state.Todos.map((todo)=>{
                if(todo.id == action.payload.id){
                    todo.text=action.payload
                }
            })
        }


    }
})

export const {addTodo,removeTOdo,upadateText}=slicerReducer.actions;

export default slicerReducer.reducer