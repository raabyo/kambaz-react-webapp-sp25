import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/HelloReducer";
import counterReducer from "../Lab4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../Lab4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../Lab4/ReduxExamples/todos/TodoReducer";

const store = configureStore({
    reducer: { helloReducer, 
    counterReducer, 
addReducer, 
todosReducer }
});

export default store;