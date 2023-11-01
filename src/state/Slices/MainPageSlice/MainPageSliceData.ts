import { RootType } from '../../store'
import { mainPageSlice } from './MainPageSlice'

//selectors
export const selectMenuStatus = (state: RootType) => state.mainPage.menuStatus
export const selectLanguage = (state: RootType) => state.mainPage.language
export const selectLanguageStatus = (state: RootType) =>
	state.mainPage.languageStatus
export const selectGlobalSearch = (state: RootType) =>
	state.mainPage.globalSearch
export const selectHotels = (state: RootType) => state.mainPage.hotels
export const selectSanatoriums = (state: RootType) => state.mainPage.sanatoriums
export const selectCamps = (state: RootType) => state.mainPage.camps
export const selectHotSprings = (state: RootType) => state.mainPage.hotSprings

//actions
export const {
	setLanguage,
	setGlobalSearch,
	setMenuStatus,
	setLanguageStatus,
} = mainPageSlice.actions
