import { FC } from 'react'
import styles from './GlobalSearch.module.scss'
import { AiOutlineSearch } from 'react-icons/ai'
import { GlobalSearchProps } from './GlobalSearchTypes'

const GlobalSearch: FC<GlobalSearchProps> = ({
	changeSearchValueHandler,
	searchValue,
}) => {
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
