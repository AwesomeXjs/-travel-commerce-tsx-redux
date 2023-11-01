import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../custom/hooks'
import {
	selectMenuStatus,
	setMenuStatus,
} from '../../state/Slices/MainPageSlice/MainPageSliceData'
import styles from './Header.module.scss'

const Header: FC = () => {
	const menuStatus = useAppSelector(selectMenuStatus)
	const dispatch = useAppDispatch()
	const changeMenuStatusHandler = () => {
		dispatch(setMenuStatus(!menuStatus))
	}
	return (
		<header className={`${styles.headerWrapper} container`}>
			<div onClick={changeMenuStatusHandler} className={styles.hamburger}>
				<span
					className={menuStatus ? styles.span1_active : styles.span1}
				></span>
				<span
					className={menuStatus ? styles.span2_active : styles.span2}
				></span>
				<span
					className={menuStatus ? styles.span3_active : styles.span3}
				></span>
			</div>
			<div className={styles.langVariant}></div>
			<div className={styles.logo}></div>
			<div className={styles.workPhone}></div>
			<div className={styles.globalSearch}></div>
			<div className={styles.socialContacts}></div>
		</header>
	)
}

export default Header
