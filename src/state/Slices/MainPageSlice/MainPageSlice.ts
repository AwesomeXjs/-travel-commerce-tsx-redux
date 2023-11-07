import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { RootType } from '../../store'
import { InitialStateType } from './MainPageSliceTypes'
import { HotelType } from './DataTypes'

const initialState: InitialStateType = {
	//DATA
	initialDataState: [],
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
	mainPageFilterInputs: {
		anotherSpot: false,
		rangePrice: [20, 37],
		//additionaly checkboxes
		pool: false,
		animators: false,
		training: false,
		powerForCars: false,
		//eat checkboxes
		allIncludes: false,
		onlyBreakfast: false,
		breakfastAndDinner: false,
		thirdEat: false,
		withoutEat: false,
		//rating:
		dontCareRating: false,
		threeAndMore: false,
		threeAndFiveAndMore: false,
		fourAndMore: false,
		fourAndFiveAndMore: false,
		//place
		dontCarePlace: false,
		hotels: false,
		base: false,
		hostels: false,
		cottages: false,
		//rooms
		dontCareRooms: false,
		oneAndMoreRooms: false,
		twoAndMoreRooms: false,
		threeAndMoreRooms: false,
		fiveAndMoreRooms: false,
	},
	//Slider state
	sliderInitialState: [],
	//sort button
	sortVariantIsOpen: false,
	sortVariants: 'Сортировать',
}

export const mainPageSlice = createSlice({
	name: 'mainPage',
	initialState,
	reducers: {
		//DATA
		setDataState: (state, action: PayloadAction<HotelType[]>) => {
			state.initialDataState = action.payload
		},
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
			state.mainPageFilterInputs.anotherSpot = action.payload
		},
		setRangePrice: (state, action: PayloadAction<number[]>) => {
			state.mainPageFilterInputs.rangePrice = action.payload
		},
		setPool: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.pool = action.payload
		},
		setAnimators: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.animators = action.payload
		},
		setTraining: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.training = action.payload
		},
		setPowerForCars: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.powerForCars = action.payload
		},
		setAllIncludes: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.allIncludes = action.payload
		},
		setOnlyBreakfast: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.onlyBreakfast = action.payload
		},
		setBreakfastAndDinner: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.breakfastAndDinner = action.payload
		},
		setThirdEat: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.thirdEat = action.payload
		},
		setWithoutEat: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.withoutEat = action.payload
		},
		//rating filter
		setDontCareRating: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.dontCareRating = action.payload
		},
		setThreeAndMore: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.threeAndMore = action.payload
		},
		setThreeAndFiveAndMore: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.threeAndFiveAndMore = action.payload
		},
		setFourAndMore: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.fourAndMore = action.payload
		},
		setFourAndFiveAndMore: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.fourAndFiveAndMore = action.payload
		},

		//place filter
		setDontCarePlace: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.dontCarePlace = action.payload
		},
		setHotels: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.hotels = action.payload
		},
		setBase: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.base = action.payload
		},
		setHostels: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.hostels = action.payload
		},
		setCottages: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.cottages = action.payload
		},
		//rooms
		setDontCareRooms: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.dontCareRooms = action.payload
		},
		setOneAndMoreRooms: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.oneAndMoreRooms = action.payload
		},
		setTwoAndMoreRooms: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.twoAndMoreRooms = action.payload
		},
		setThreeAndMoreRooms: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.threeAndMoreRooms = action.payload
		},
		setFiveAndMoreRooms: (state, action: PayloadAction<boolean>) => {
			state.mainPageFilterInputs.fiveAndMoreRooms = action.payload
		},
		//resetFilter
		setResetAllFilters: (state, action: PayloadAction) => {
			state.mainPageFilterInputs = initialState.mainPageFilterInputs
		},
		setSliderState: (state, action: PayloadAction<string[]>) => {
			state.sliderInitialState = action.payload
		},
		//sort button
		setSortVariantIsOpen: (state, action: PayloadAction<boolean>) => {
			state.sortVariantIsOpen = action.payload
		},
		setSortVariants: (
			state,
			action: PayloadAction<
				| 'Сортировать'
				| 'Сначала дорогие'
				| 'Сначала дешевые'
				| 'По рейтингу'
				| 'Любой'
			>
		) => {
			state.sortVariants = action.payload
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

//actions
export const {
	//DATA
	setDataState,
	///
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
	setRangePrice,
	//additionaly filter
	setPool,
	setAnimators,
	setTraining,
	setPowerForCars,

	//eat filter
	setAllIncludes,
	setOnlyBreakfast,
	setBreakfastAndDinner,
	setThirdEat,
	setWithoutEat,
	//rating filter
	setDontCareRating,
	setThreeAndMore,
	setThreeAndFiveAndMore,
	setFourAndMore,
	setFourAndFiveAndMore,
	//place filter
	setDontCarePlace,
	setHotels,
	setBase,
	setHostels,
	setCottages,
	//rooms filter
	setDontCareRooms,
	setOneAndMoreRooms,
	setTwoAndMoreRooms,
	setThreeAndMoreRooms,
	setFiveAndMoreRooms,
	//resetAllFilters
	setResetAllFilters,
	//Slider
	setSliderState,
	//sort button
	setSortVariantIsOpen,
	setSortVariants,
} = mainPageSlice.actions
