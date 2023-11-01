import { FC, useRef } from 'react'
import { GrFormNext } from 'react-icons/gr'
import { useAppDispatch, useAppSelector } from '../../../custom/hooks'
import {
	selectLanguage,
	selectLanguageStatus,
	setLanguage,
	setLanguageStatus,
} from '../../../state/Slices/MainPageSlice/MainPageSliceData'
import styles from './LanguageVariant.module.scss'

const LanguageVariant: FC = () => {
	const languageStatus = useAppSelector(selectLanguageStatus)
	const language = useAppSelector(selectLanguage)
	const dispatch = useAppDispatch()
	const changeLanguageStatusHandler = () => {
		dispatch(setLanguageStatus(!languageStatus))
	}
	const refOne = useRef<HTMLDivElement>(null)
	const hideLanguageWindowOnClick = (e: any) => {
		if (refOne.current && !refOne.current.contains(e.target)) {
			dispatch(setLanguageStatus(false))
		}
	}
	document.addEventListener('click', hideLanguageWindowOnClick, true)

	return (
		<div ref={refOne} className={styles.langVariant}>
			<div
				className={styles.langiageHead}
				onClick={changeLanguageStatusHandler}
			>
				<span className={styles.language}>{language}</span>
				<GrFormNext className={languageStatus && styles.languageActiveIcon} />
			</div>
			{languageStatus && (
				<div className={styles.languageChange}>
					<div onClick={() => dispatch(setLanguage('RU'))}>{'RU'}</div>
					<div onClick={() => dispatch(setLanguage('EN'))}>{'EN'}</div>
					<div onClick={() => dispatch(setLanguage('KAZ'))}>{'KAZ'}</div>
				</div>
			)}
		</div>
	)
}

export default LanguageVariant
