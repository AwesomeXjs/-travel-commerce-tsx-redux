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
	whereWindowOpen: boolean
	whoWindowOpen: boolean
	calendarWindowOpen: boolean
	date: string[] | string
	/* 	hotels: []
	sanatoriums: []
	camps: []
	hotSprings: []
	tours: [] */
}
