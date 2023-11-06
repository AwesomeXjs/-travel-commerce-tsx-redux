import { FC } from 'react'
import styles from './PlaceFilter.module.scss'
import CheckBoxMainPage from '../../../../../../custom/UI/CheckBoxMainPage/CheckBoxMainPage'
import { useAppDispatch } from '../../../../../../custom/hooks'
import {
	setBase,
	setCottages,
	setDontCarePlace,
	setHostels,
	setHotels,
} from '../../../../../../state/Slices/MainPageSlice/MainPageSlice'

export interface PlaceFilterProps {
	dontCarePlaceValue: boolean
	selectHotelsValue: boolean
	selectBaseValue: boolean
	selectHostelsValue: boolean
	selectCottagesValue: boolean
}

const PlaceFilter: FC<PlaceFilterProps> = ({
	dontCarePlaceValue,
	selectHotelsValue,
	selectBaseValue,
	selectHostelsValue,
	selectCottagesValue,
}) => {
	const dispatch = useAppDispatch()
	return (
		<div className={styles.PlaceFilter}>
			<h3 className='mainPageFilterTitles'>Тип размещения</h3>
			<div className={styles.PlaceFilterCheckboxes}>
				<div className={styles.PlaceFilterItem}>
					<CheckBoxMainPage
						checked={dontCarePlaceValue}
						onChange={e => dispatch(setDontCarePlace(!dontCarePlaceValue))}
					/>
					<span>Любой</span>
				</div>
				<div className={styles.PlaceFilterItem}>
					<CheckBoxMainPage
						checked={selectHotelsValue}
						onChange={e => dispatch(setHotels(!selectHotelsValue))}
					/>
					<span>Отели (200)</span>
				</div>
				<div className={styles.PlaceFilterItem}>
					<CheckBoxMainPage
						checked={selectBaseValue}
						onChange={e => dispatch(setBase(!selectBaseValue))}
					/>
					<span>Базы отдыха (20)</span>
				</div>
				<div className={styles.PlaceFilterItem}>
					<CheckBoxMainPage
						checked={selectHostelsValue}
						onChange={e => dispatch(setHostels(!selectHostelsValue))}
					/>
					<span>Хостелы</span>
				</div>
				<div className={styles.PlaceFilterItem}>
					<CheckBoxMainPage
						checked={selectCottagesValue}
						onChange={e => dispatch(setCottages(!selectCottagesValue))}
					/>
					<span>Котеджи</span>
				</div>
			</div>
		</div>
	)
}

export default PlaceFilter
