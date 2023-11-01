import { FC } from 'react'
import styles from './Hamburger.module.scss'
import { useAppDispatch, useAppSelector } from '../../../custom/hooks'
import {
	selectMenuStatus,
	setMenuStatus,
} from '../../../state/Slices/MainPageSlice/MainPageSliceData'

const Hamburger: FC = () => {
	const dispatch = useAppDispatch()
	const menuStatus = useAppSelector(selectMenuStatus)
	const changeMenuStatusHandler = () => {
		dispatch(setMenuStatus(!menuStatus))
	}
	return (
		<div onClick={changeMenuStatusHandler} className={styles.hamburger}>
			<span className={menuStatus ? styles.span1_active : styles.span1}></span>
			<span className={menuStatus ? styles.span2_active : styles.span2}></span>
			<span className={menuStatus ? styles.span3_active : styles.span3}></span>
		</div>
	)
}

export default Hamburger
