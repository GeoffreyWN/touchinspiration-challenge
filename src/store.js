import { configureStore } from '@reduxjs/toolkit'
import team from './containers/Team/store'

export const store = configureStore({
    reducer: { team }
})
