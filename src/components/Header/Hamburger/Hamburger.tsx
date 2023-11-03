import { FC } from 'react'
import styles from './Hamburger.module.scss'
import { HamburgerProps } from './HamburgerTypes'

const Hamburger: FC<HamburgerProps> = ({
	changeMenuStatusHandler,
	menuStatus,
}) => {
	return (
		<div onClick={changeMenuStatusHandler} className={styles.hamburger}>
			<span className={menuStatus ? styles.span1_active : styles.span1}></span>
			<span className={menuStatus ? styles.span2_active : styles.span2}></span>
			<span className={menuStatus ? styles.span3_active : styles.span3}></span>
		</div>
	)
}

export default Hamburger
