import { RefObject } from 'react'

export interface LanguageVariantProps {
	refOne: RefObject<HTMLDivElement>
	changeLanguageStatusHandler: () => void
	language: 'RU' | 'EN' | 'KAZ'
	languageStatus: boolean
}
