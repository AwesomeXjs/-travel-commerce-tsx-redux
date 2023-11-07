import { FC, useEffect, useRef } from 'react'
import styles from './HeaderDataListSortButton.module.scss'
import { useAppDispatch, useAppSelector } from '../../../../../custom/hooks'
import {
	setSortVariantIsOpen,
	setSortVariants,
} from '../../../../../state/Slices/MainPageSlice/MainPageSlice'
import CustomButton from '../../../../../custom/UI/CustomButton/CustomButton'
import { TbArrowsSort } from 'react-icons/tb'
import { PiSortAscendingBold, PiSortDescendingBold } from 'react-icons/pi'

const HeaderDataListSortButton: FC = () => {
	const dispatch = useAppDispatch()
	const { sortVariantIsOpen, sortVariants, initialDataState } = useAppSelector(
		state => state.mainPage
	)
	const refHideSortWindow = useRef(null)
	const hideClickOutside = (e: any) => {
		if (
			refHideSortWindow.current &&
			// @ts-ignore
			!refHideSortWindow.current.contains(e.target)
		) {
			dispatch(setSortVariantIsOpen(false))
		}
	}

	useEffect(() => {
		document.addEventListener('click', hideClickOutside, true)
	}, [])
	return (
		<div className={styles.headerListAndSort}>
			<div className={styles.headerList}>
				<span className={styles.headerListTitle}>Найдено:</span>
				<span className={styles.headerListQty}>
					{initialDataState.length} вариантов
				</span>
			</div>
			<div className={styles.sortButtonWrapper}>
				<CustomButton
					onClick={() => dispatch(setSortVariantIsOpen(!sortVariantIsOpen))}
					variant='backWhiteBorderBlueForSort'
				>
					<TbArrowsSort style={{ marginRight: '10px' }} />
					{sortVariants}
				</CustomButton>

				{sortVariantIsOpen && (
					<div ref={refHideSortWindow} className={styles.sortVariants}>
						<div
							onClick={() => dispatch(setSortVariants('Сначала дорогие'))}
							className={styles.sortVariantsItem}
						>
							<PiSortDescendingBold className={styles.sortListIcon} />
							<span>Сначала дорогие</span>
						</div>
						<div
							onClick={() => dispatch(setSortVariants('Сначала дешевые'))}
							className={styles.sortVariantsItem}
						>
							<PiSortAscendingBold className={styles.sortListIcon} />
							<span>Сначала дешевые</span>
						</div>
						<div
							onClick={() => dispatch(setSortVariants('По рейтингу'))}
							className={styles.sortVariantsItem}
						>
							<PiSortDescendingBold className={styles.sortListIcon} />
							<span>По рейтингу</span>
						</div>
						<div
							onClick={() => dispatch(setSortVariants('Любой'))}
							className={styles.sortVariantsItem}
						>
							<TbArrowsSort className={styles.sortListIcon} />
							<span>Любой</span>
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default HeaderDataListSortButton
