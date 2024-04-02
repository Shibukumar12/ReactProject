import {configureStore} from '@reduxjs/toolkit'
import slicerReducer from "../feature/Slicing"

export const configStore=configureStore({
    reducer:slicerReducer,
})