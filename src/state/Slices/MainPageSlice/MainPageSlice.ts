import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootType } from '../../store'
import { InitialStateType } from './MainPageSliceTypes'

const initialState: InitialStateType = {
	menuStatus: false,
	language: 'RU',
	languageStatus: false,
	globalSearch: '',
	phoneForApplication: '',
	dataStatus: 'hotels',
	where: '',
	when: [],
	who: null,
	date: 'Любые даты',
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
		setDataStatus: (
			state,
			action: PayloadAction<
				'hotels' | 'camps' | 'hotSprings' | 'sanatoriums' | 'fewDays'
			>
		) => {
			state.dataStatus = action.payload
		},
		setDateCalendar: (state, action: PayloadAction<string[]>) => {
			state.date = action.payload
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
export const selectDataStatus = (state: RootType) => state.mainPage.dataStatus
export const selectWhere = (state: RootType) => state.mainPage.where
export const selectWhen = (state: RootType) => state.mainPage.when
export const selectWho = (state: RootType) => state.mainPage.who
export const selectDate = (state: RootType) => state.mainPage.date

//actions
export const {
	setLanguage,
	setGlobalSearch,
	setMenuStatus,
	setLanguageStatus,
	setPhoneForApplication,
	setDataStatus,
	setDateCalendar,
} = mainPageSlice.actions
