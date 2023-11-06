import { FC } from 'react'
import CheckBoxMainPage from '../../../../../../custom/UI/CheckBoxMainPage/CheckBoxMainPage'
import { useAppDispatch } from '../../../../../../custom/hooks'
import styles from './AdditionalyFilter.module.scss'
import {
	setAnimators,
	setPool,
	setPowerForCars,
	setTraining,
} from '../../../../../../state/Slices/MainPageSlice/MainPageSlice'

export interface AdditionalyFilterProps {
	poolValue: boolean
	animatorsValue: boolean
	trainingValue: boolean
	powerForCarsValue: boolean
}

const AdditionalyFilter: FC<AdditionalyFilterProps> = ({
	poolValue,
	animatorsValue,
	trainingValue,
	powerForCarsValue,
}) => {
	const dispatch = useAppDispatch()
	return (
		<div className={styles.additionallyFilter}>
			<h3 className='mainPageFilterTitles'>Дополнительно</h3>
			<div className={styles.additionalyFilterCheckboxes}>
				<div className={styles.additionalyFilterItem}>
					<CheckBoxMainPage
						checked={poolValue}
						onChange={e => dispatch(setPool(!poolValue))}
					/>
					<span>Бассейн</span>
				</div>
				<div className={styles.additionalyFilterItem}>
					<CheckBoxMainPage
						checked={animatorsValue}
						onChange={e => dispatch(setAnimators(!animatorsValue))}
					/>
					<span>Аниматоры</span>
				</div>
				<div className={styles.additionalyFilterItem}>
					<CheckBoxMainPage
						checked={trainingValue}
						onChange={e => dispatch(setTraining(!trainingValue))}
					/>
					<span>Тренажерный зал</span>
				</div>
				<div className={styles.additionalyFilterItem}>
					<CheckBoxMainPage
						checked={powerForCarsValue}
						onChange={e => dispatch(setPowerForCars(!powerForCarsValue))}
					/>
					<span>Зарядка для электромобилей</span>
				</div>
			</div>
		</div>
	)
}

export default AdditionalyFilter
