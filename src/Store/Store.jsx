import { configureStore } from '@reduxjs/toolkit'
import Slcie from '../Slice/Slice'

export const Store = configureStore({
    reducer: {
        json: Slcie
    }
})
