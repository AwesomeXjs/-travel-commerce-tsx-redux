import { configureStore } from '@reduxjs/toolkit'
import MainPageSlice from './Slices/MainPageSlice/MainPageSlice'

export const store = configureStore({
	reducer: {
		mainPage: MainPageSlice,
	},
})

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
