import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './routeReducer'
import { authApi } from '@/store/api/authAPI'
import { courseApi } from '@/store/api/courseAPI'

export const appStore = configureStore({
    reducer: rootReducer,
    middleware: (defaultMiddleware) => defaultMiddleware().concat(authApi.middleware, courseApi.middleware)
})

const initializeApp = async () => {
    await appStore.dispatch(authApi.endpoints.loadUser.initiate({}, {forceRefetch: true}))
}

initializeApp()