import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootType } from '../../store'
import { InitialStateType } from './MainPageSliceTypes'

const initialState: InitialStateType = {
	//header state
	menuStatus: false,
	language: 'RU',
	languageStatus: false,
	globalSearch: '',
	phoneForApplication: '',
	//big filter inputs
	dataStatus: 'hotels',
	where: 'Весь Казахстан',
	when: [],
	who: 2,
	whoChildren: 0,
	//windows
	backgroundOpacity: false,
	whereWindowOpen: false,
	calendarWindowOpen: false,
	whoWindowOpen: false,
	date: 'Любые даты',
	//MAIN PAGE FILTER INPUTS
	anotherSpot: false,
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
		setDataStatus: (state, action: PayloadAction<string>) => {
			state.dataStatus = action.payload
		},
		setDateCalendar: (state, action: PayloadAction<string[] | string>) => {
			state.date = action.payload
		},
		setWho: (state, action: PayloadAction<number>) => {
			state.who = action.payload
		},
		setWhoChildren: (state, action: PayloadAction<number>) => {
			state.whoChildren = action.payload
		},
		setWhoWindowOpen: (state, action: PayloadAction<boolean>) => {
			state.whoWindowOpen = action.payload
		},
		setWhere: (state, action: PayloadAction<string>) => {
			state.where = action.payload
		},
		setWhereWindowOpen: (state, action: PayloadAction<boolean>) => {
			state.whereWindowOpen = action.payload
		},
		setCalendarWindowOpen: (state, action: PayloadAction<boolean>) => {
			state.calendarWindowOpen = action.payload
		},
		setBackgroundOpacity: (state, action: PayloadAction<boolean>) => {
			state.backgroundOpacity = action.payload
		},
		setAnotherSpot: (state, action: PayloadAction<any>) => {
			state.anotherSpot = action.payload
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
export const selectWhen = (state: RootType) => state.mainPage.when
export const selectWho = (state: RootType) => state.mainPage.who
export const selectWhoChildren = (state: RootType) => state.mainPage.whoChildren
export const selectWhoWindowOpen = (state: RootType) =>
	state.mainPage.whoWindowOpen
export const selectDate = (state: RootType) => state.mainPage.date
export const selectWhere = (state: RootType) => state.mainPage.where
export const selectWhereWindowOpen = (state: RootType) =>
	state.mainPage.whereWindowOpen
export const selectCalendarWindowOpen = (state: RootType) =>
	state.mainPage.calendarWindowOpen
export const selectBackgroundOpacity = (state: RootType) =>
	state.mainPage.backgroundOpacity
export const selectAnotherSpot = (state: RootType) => state.mainPage.anotherSpot

//actions
export const {
	setLanguage,
	setGlobalSearch,
	setMenuStatus,
	setLanguageStatus,
	setPhoneForApplication,
	setDataStatus,
	setDateCalendar,
	setWhoChildren,
	setWho,
	setWhoWindowOpen,
	setWhere,
	setWhereWindowOpen,
	setCalendarWindowOpen,
	setBackgroundOpacity,
	setAnotherSpot,
} = mainPageSlice.actions
