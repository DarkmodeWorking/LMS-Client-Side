import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../store/authSlice'
import { authApi } from '@/store/api/authAPI'
import { courseApi } from '@/store/api/courseAPI'

const rootReducer = combineReducers({
    [authApi.reducerPath]:authApi.reducer,
    [courseApi.reducerPath]:courseApi.reducer,
    auth: authReducer
})

export default rootReducer