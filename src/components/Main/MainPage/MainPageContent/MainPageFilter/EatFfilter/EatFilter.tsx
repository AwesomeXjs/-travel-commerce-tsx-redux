import { FC } from 'react'
import CheckBoxMainPage from '../../../../../../custom/UI/CheckBoxMainPage/CheckBoxMainPage'
import { useAppDispatch } from '../../../../../../custom/hooks'
import styles from './EatFilter.module.scss'
import {
	setAllIncludes,
	setBreakfastAndDinner,
	setOnlyBreakfast,
	setThirdEat,
	setWithoutEat,
} from '../../../../../../state/Slices/MainPageSlice/MainPageSlice'

export interface EatFilterProps {
	allIncludesValue: boolean
	onlyBreakfastValue: boolean
	breakfastAndDinnerValue: boolean
	thirdEatValue: boolean
	withoutEatValue: boolean
}

const EatFilter: FC<EatFilterProps> = ({
	allIncludesValue,
	onlyBreakfastValue,
	breakfastAndDinnerValue,
	thirdEatValue,
	withoutEatValue,
}) => {
	const dispatch = useAppDispatch()
	return (
		<div className={styles.eatFilter}>
			<h3 className='mainPageFilterTitles'>Питание</h3>
			<div className={styles.eatFilterCheckboxes}>
				<div className={styles.eatFilterItem}>
					<CheckBoxMainPage
						checked={allIncludesValue}
						onChange={e => dispatch(setAllIncludes(!allIncludesValue))}
					/>
					<span>Все включено</span>
				</div>
				<div className={styles.eatFilterItem}>
					<CheckBoxMainPage
						checked={onlyBreakfastValue}
						onChange={e => dispatch(setOnlyBreakfast(!onlyBreakfastValue))}
					/>
					<span>Только завтрак</span>
				</div>
				<div className={styles.eatFilterItem}>
					<CheckBoxMainPage
						checked={breakfastAndDinnerValue}
						onChange={e =>
							dispatch(setBreakfastAndDinner(!breakfastAndDinnerValue))
						}
					/>
					<span>Завтрак и ужин</span>
				</div>
				<div className={styles.eatFilterItem}>
					<CheckBoxMainPage
						checked={thirdEatValue}
						onChange={e => dispatch(setThirdEat(!thirdEatValue))}
					/>
					<span>3-х разовое</span>
				</div>
				<div className={styles.eatFilterItem}>
					<CheckBoxMainPage
						checked={withoutEatValue}
						onChange={e => dispatch(setWithoutEat(!withoutEatValue))}
					/>
					<span>Без питания</span>
				</div>
			</div>
		</div>
	)
}

export default EatFilter
