import { ChangeEvent, FC, useRef } from 'react'

import styles from './Header.module.scss'
import Hamburger from './Hamburger/Hamburger'
import LanguageVariant from './LanguageVariant/LanguageVariant'
import SocialIconsAndSearch from './SocialIcons/SocialIcons'
import Menu from './Menu/Menu'
import { useAppDispatch, useAppSelector } from '../../custom/hooks'

import LogoAndMobileSearch from './LogoAndMobileSearch/LogoAndMobileSearch'
import {
	selectBackgroundOpacity,
	selectGlobalSearch,
	selectLanguage,
	selectLanguageStatus,
	selectMenuStatus,
	setBackgroundOpacity,
	setGlobalSearch,
	setLanguageStatus,
	setMenuStatus,
} from '../../state/Slices/MainPageSlice/MainPageSlice'
import WorkPhone from './WorkPhone/WorkPhone'

const Header: FC = () => {
	//selectors
	const menuStatus = useAppSelector(selectMenuStatus)
	const searchValue = useAppSelector(selectGlobalSearch)
	const languageStatus = useAppSelector(selectLanguageStatus)
	const language = useAppSelector(selectLanguage)
	const backgroundOpacity = useAppSelector(selectBackgroundOpacity)
	//dispatches
	const dispatch = useAppDispatch()

	const changeSearchValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(setGlobalSearch(e.target.value))
	}

	const changeLanguageStatusHandler = () => {
		dispatch(setLanguageStatus(!languageStatus))
	}

	const changeMenuStatusHandler = () => {
		dispatch(setMenuStatus(!menuStatus))
		dispatch(setBackgroundOpacity(!backgroundOpacity))
	}

	//useRef
	const refOne = useRef<HTMLDivElement>(null)
	const hideLanguageWindowOnClick = (e: any) => {
		if (refOne.current && !refOne.current.contains(e.target)) {
			dispatch(setLanguageStatus(false))
		}
	}
	document.addEventListener('click', hideLanguageWindowOnClick, true)

	return (
		<header className={styles.mainHeader}>
			<div
				className={
					menuStatus
						? `${styles.headerWrapper} ${styles.activeBackgroundOpacity} container`
						: `${styles.headerWrapper} container`
				}
			>
				<div className={styles.headerFirstSection}>
					<Hamburger
						menuStatus={menuStatus}
						changeMenuStatusHandler={changeMenuStatusHandler}
					/>
					<LanguageVariant
						languageStatus={languageStatus}
						language={language}
						refOne={refOne}
						changeLanguageStatusHandler={changeLanguageStatusHandler}
					/>

					<LogoAndMobileSearch />
				</div>
				<WorkPhone />
				<SocialIconsAndSearch
					changeSearchValueHandler={changeSearchValueHandler}
					searchValue={searchValue}
				/>
			</div>
			<hr className={styles.border} />
			{menuStatus && <Menu />}
		</header>
	)
}

export default Header
