export const enum Languages {
	RU = 'RU',
	EN = 'EN',
	KAZ = 'KAZ',
}

export interface InitialStateType {
	menuStatus: boolean
	language: Languages
	globalSearch: string
	hotels: []
	sanatoriums: []
	camps: []
	hotSprings: []
}
