import { configureStore } from '@reduxjs/toolkit'

import reducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import notificationReducer from './reducers/notificationReducer'

const store = configureStore({
    reducer: {
        anecdotes: reducer,
        filter: filterReducer,
        notificaiton: notificationReducer
    }

})
store.subscribe(() => { console.log(store.getState()) })


export default store