import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import Slcie from '../Slice/Slice'

export const Store = configureStore({
    reducer: {
        json: Slcie
    }
})
