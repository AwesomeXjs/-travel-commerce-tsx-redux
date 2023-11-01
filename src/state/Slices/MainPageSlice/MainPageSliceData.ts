import { RootType } from '../../store'
import { mainPageSlice } from './MainPageSlice'

//selectors
export const selectLanguage = (state: RootType) => state.mainPage.language
export const selectGlobalSearch = (state: RootType) =>
	state.mainPage.globalSearch
export const selectHotels = (state: RootType) => state.mainPage.hotels
export const selectSanatoriums = (state: RootType) => state.mainPage.sanatoriums
export const selectCamps = (state: RootType) => state.mainPage.camps
export const selectHotSprings = (state: RootType) => state.mainPage.hotSprings

//actions
export const { setLanguage, setGlobalSearch } = mainPageSlice.actions
