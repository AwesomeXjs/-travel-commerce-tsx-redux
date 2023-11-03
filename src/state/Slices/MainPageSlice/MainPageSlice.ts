import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootType } from '../../store'
import { InitialStateType } from './MainPageSliceTypes'

const initialState: InitialStateType = {
	menuStatus: false,
	language: 'RU',
	languageStatus: false,
	globalSearch: '',
	phoneForApplication: '',
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
		setPhoneForApplication: (state, action: PayloadAction<any>) => {
			state.phoneForApplication = action.payload
		},
	},
})

export default mainPageSlice.reducer

//selectors
export const selectMenuStatus = (state: RootType) => state.mainPage.menuStatus
export const selectLanguage = (state: RootType) => state.mainPage.language
export const selectLanguageStatus = (state: RootType) =>
	state.mainPage.languageStatus
export const selectGlobalSearch = (state: RootType) =>
	state.mainPage.globalSearch
export const selectPhoneForApplication = (state: RootType) =>
	state.mainPage.phoneForApplication

//actions
export const {
	setLanguage,
	setGlobalSearch,
	setMenuStatus,
	setLanguageStatus,
	setPhoneForApplication,
} = mainPageSlice.actions
