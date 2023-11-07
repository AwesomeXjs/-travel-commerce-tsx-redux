import { HotelType } from '../../../types/DataTypes'

export interface InitialStateType {
	//Data
	initialDataState: HotelType[]
	////
	menuStatus: boolean
	language: 'RU' | 'EN' | 'KAZ'
	languageStatus: boolean
	globalSearch: string
	phoneForApplication: any
	dataStatus: string
	where: string
	when: number[] | string
	who: number
	whoChildren: number
	//windows:
	backgroundOpacity: boolean
	whereWindowOpen: boolean
	whoWindowOpen: boolean
	calendarWindowOpen: boolean
	date: string[] | string
	//MAIN PAGE FILTER INPUTS
	mainPageFilterInputs: {
		anotherSpot: boolean
		rangePrice: number[]
		//additionaly checkboxes
		pool: boolean
		animators: boolean
		training: boolean
		powerForCars: boolean
		//eat checkboxes
		allIncludes: boolean
		onlyBreakfast: boolean
		breakfastAndDinner: boolean
		thirdEat: boolean
		withoutEat: boolean
		//rating checkboxes
		dontCareRating: boolean
		threeAndMore: boolean
		threeAndFiveAndMore: boolean
		fourAndMore: boolean
		fourAndFiveAndMore: boolean
		//place checkboxes
		dontCarePlace: boolean
		hotels: boolean
		base: boolean
		hostels: boolean
		cottages: boolean
		//rooms checkboxes
		dontCareRooms: boolean
		oneAndMoreRooms: boolean
		twoAndMoreRooms: boolean
		threeAndMoreRooms: boolean
		fiveAndMoreRooms: boolean
	}
	sliderInitialState: string[]
	//sort button
	sortVariantIsOpen: boolean
	sortVariants:
		| 'Сортировать'
		| 'Сначала дорогие'
		| 'Сначала дешевые'
		| 'По рейтингу'
		| 'Любой'
}
