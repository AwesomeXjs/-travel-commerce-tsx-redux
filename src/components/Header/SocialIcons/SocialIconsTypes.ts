import { ChangeEvent } from 'react'

export interface SocialIconsAndSearchProps {
	changeSearchValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
	searchValue: string
}
