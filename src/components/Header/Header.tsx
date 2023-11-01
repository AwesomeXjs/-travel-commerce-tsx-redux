import { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../custom/hooks'
import {
	selectMenuStatus,
	setMenuStatus,
} from '../../state/Slices/MainPageSlice/MainPageSliceData'
import styles from './Header.module.scss'
import Hamburger from './Hamburger/Hamburger'

const Header: FC = () => {
	const menuStatus = useAppSelector(selectMenuStatus)
	const dispatch = useAppDispatch()
	const changeMenuStatusHandler = () => {
		dispatch(setMenuStatus(!menuStatus))
	}
	return (
		<header className={`container`}>
			<div className={styles.headerWrapper}>
				<Hamburger
					changeMenuStatusHandler={changeMenuStatusHandler}
					menuStatus={menuStatus}
				/>
				<div className={styles.langVariant}></div>
				<div className={styles.logo}></div>
				<div className={styles.workPhone}></div>
				<div className={styles.globalSearch}></div>
				<div className={styles.socialContacts}></div>
			</div>
		</header>
	)
}

export default Header
