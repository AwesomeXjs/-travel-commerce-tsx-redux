import { FC, useEffect, useRef } from 'react'
import { useAppDispatch } from '../../../../../custom/hooks'
import styles from './Where.module.scss'
import {
	setBackgroundOpacity,
	setWhere,
	setWhereWindowOpen,
} from '../../../../../state/Slices/MainPageSlice/MainPageSlice'
import { PiMapPinLine } from 'react-icons/pi'

export interface WhereChangerProps {
	dataWhere: string
	whereWindowOpen: boolean
	backgroundOpacity: boolean
}

const WhereChanger: FC<WhereChangerProps> = ({
	dataWhere,
	whereWindowOpen,
	backgroundOpacity,
}) => {
	const dispatch = useAppDispatch()
	//hide whereWindowOpen
	const refHideWhere = useRef(null)
	const hideClickOutsideWhereWindow = (e: any) => {
		// @ts-ignore
		if (refHideWhere.current && !refHideWhere.current.contains(e.target)) {
			dispatch(setWhereWindowOpen(false))
		}
	}
	useEffect(() => {
		document.addEventListener('click', hideClickOutsideWhereWindow, true)
	}, [])
	return (
		<div
			className={
				whereWindowOpen
					? `${styles.mainWhere} ${styles.activeBackground}`
					: styles.mainWhere
			}
		>
			<PiMapPinLine className={styles.icon} />
			<div className={styles.whereContent}>
				<span>Куда?</span>
				<input
					onClick={() => {
						dispatch(setWhere(''))
						dispatch(setWhereWindowOpen(!whereWindowOpen))
						dispatch(setBackgroundOpacity(true))
					}}
					value={dataWhere}
					onChange={e => dispatch(setWhere(e.target.value))}
					placeholder='Весь Казахстан'
					className={styles.inputWhere}
					type='text'
				/>
				<div ref={refHideWhere}>
					{/* 	{dataWhere.trim().length > 0 */}
					{whereWindowOpen && (
						<div className={styles.whereList}>
							<h3 className={styles.whereListTitle}>Выберите город</h3>
							<div className={styles.hotelSearchList}>
								<h3 className={styles.searchListTitle}>Отели</h3>
								<div className={styles.dataSearchList}></div>
							</div>
							<div className={styles.hotelSearchList}>
								<h3 className={styles.searchListTitle}>Санатории</h3>
								<div className={styles.dataSearchList}></div>
							</div>
							<div className={styles.hotelSearchList}>
								<h3 className={styles.searchListTitle}>1-3 дневные</h3>
								<div className={styles.dataSearchList}></div>
							</div>
							<div className={styles.hotelSearchList}>
								<h3 className={styles.searchListTitle}>Лагеря</h3>
								<div className={styles.dataSearchList}></div>
							</div>
							<div className={styles.hotelSearchList}>
								<h3 className={styles.searchListTitle}>Горячие источники</h3>
								<div className={styles.dataSearchList}></div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default WhereChanger
