import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {
	Languages,
	InitialStateType,
} from '../../../types/StateTypes/MainPageSliceTypes'

const initialState: InitialStateType = {
	menuStatus: false,
	language: Languages.RU,
	globalSearch: '',
	hotels: [],
	sanatoriums: [],
	camps: [],
	hotSprings: [],
}

export const mainPageSlice = createSlice({
	name: 'mainPage',
	initialState,
	reducers: {
		setLanguage: (state, action: PayloadAction<Languages>) => {
			state.language = action.payload
		},
		setGlobalSearch: (state, action: PayloadAction<string>) => {
			state.globalSearch = action.payload
		},
		setMenuStatus: (state, action: PayloadAction<boolean>) => {
			state.menuStatus = action.payload
		},
	},
})

export default mainPageSlice.reducer
