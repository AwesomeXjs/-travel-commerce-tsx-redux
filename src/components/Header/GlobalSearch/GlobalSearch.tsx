import { ChangeEvent, FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../../custom/hooks'
import {
	selectGlobalSearch,
	setGlobalSearch,
} from '../../../state/Slices/MainPageSlice/MainPageSliceData'
import styles from './GlobalSearch.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'

const GlobalSearch: FC = () => {
	const searchValue = useAppSelector(selectGlobalSearch)
	const dispatch = useAppDispatch()
	const changeSearchValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setGlobalSearch(e.target.value))
	}
	return (
		<div className={styles.globalSearch}>
			<AiOutlineSearch className={styles.statickSearchLogo} />
			<input
				value={searchValue}
				onChange={changeSearchValueHandler}
				placeholder='Поиск по сайту'
				className={styles.searchInput}
				type='text'
			/>
			{searchValue.trim() && (
				<AiOutlineSearch className={styles.searchActive} />
			)}
		</div>
	)
}

export default GlobalSearch
