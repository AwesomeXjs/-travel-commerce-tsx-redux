export interface InitialStateType {
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
	anotherSpot: boolean
	rangePrice: number[]
	/* 	hotels: []
	sanatoriums: []
	camps: []
	hotSprings: []
	tours: [] */
}
