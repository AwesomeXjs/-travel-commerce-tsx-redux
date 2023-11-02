import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { InitialStateType } from '../../../types/StateTypes/MainPageSliceTypes'

const initialState: InitialStateType = {
	menuStatus: false,
	language: 'RU',
	languageStatus: false,
	globalSearch: '',
	/* 	hotels: [],
	sanatoriums: [],
	camps: [],
	hotSprings: [],
	tours: [], */
}

export const mainPageSlice = createSlice({
	name: 'mainPage',
	initialState,
	reducers: {
		setLanguage: (state, action: PayloadAction<'RU' | 'EN' | 'KAZ'>) => {
			state.language = action.payload
		},
		setLanguageStatus: (state, action: PayloadAction<boolean>) => {
			state.languageStatus = action.payload
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
