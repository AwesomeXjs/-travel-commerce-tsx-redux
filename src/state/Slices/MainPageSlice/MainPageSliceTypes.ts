export interface InitialStateType {
	menuStatus: boolean
	language: 'RU' | 'EN' | 'KAZ'
	languageStatus: boolean
	globalSearch: string
	phoneForApplication: any
	dataStatus: 'hotels' | 'camps' | 'hotSprings' | 'sanatoriums' | 'fewDays'
	where: string
	when: number[] | string
	who: number
	whoChildren: number
	whoWindowOpen: boolean
	date: string[] | string
	/* 	hotels: []
	sanatoriums: []
	camps: []
	hotSprings: []
	tours: [] */
}
