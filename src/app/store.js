import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './routeReducer'
import { authApi } from '@/store/api/authAPI'

export const appStore = configureStore({
    reducer: rootReducer,
    middleware: (defaultMiddleware) => defaultMiddleware().concat(authApi.middleware)
})

const initializeApp = async () => {
    await appStore.dispatch(authApi.endpoints.loadUser.initiate({}, {forceRefetch: true}))
}

initializeApp()