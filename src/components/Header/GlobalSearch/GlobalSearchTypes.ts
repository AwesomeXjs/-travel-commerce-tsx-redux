import { ChangeEvent } from 'react'

export interface GlobalSearchProps {
	changeSearchValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
	searchValue: string
}
