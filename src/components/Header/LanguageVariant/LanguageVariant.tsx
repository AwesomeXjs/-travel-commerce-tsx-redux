import { FC } from 'react'
import { GrFormNext } from 'react-icons/gr'

import styles from './LanguageVariant.module.scss'
import { useAppDispatch } from '../../../custom/hooks'
import { LanguageVariantProps } from './LanguageVariantTypes'
import { setLanguage } from '../../../state/Slices/MainPageSlice/MainPageSlice'

const LanguageVariant: FC<LanguageVariantProps> = ({
	refOne,
	changeLanguageStatusHandler,
	language,
	languageStatus,
}) => {
	const dispatch = useAppDispatch()
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
