import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../store/authSlice'
import { authApi } from '@/store/api/authAPI'

const rootReducer = combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    auth: authReducer
})

export default rootReducer