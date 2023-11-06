import { FC } from 'react'
import CheckBoxMainPage from '../../../../../../custom/UI/CheckBoxMainPage/CheckBoxMainPage'
import { useAppDispatch } from '../../../../../../custom/hooks'
import {
	setDontCareRating,
	setFourAndFiveAndMore,
	setFourAndMore,
	setThreeAndFiveAndMore,
	setThreeAndMore,
} from '../../../../../../state/Slices/MainPageSlice/MainPageSlice'
import styles from './RatingFilter.module.scss'

export interface RatingFilterProps {
	dontCareRatingValue: boolean
	threeAndMoreValue: boolean
	threeAndFiveAndMoreValue: boolean
	fourAndMoreValue: boolean
	fourAndFiveAndMore: boolean
}

const RatingFilter: FC<RatingFilterProps> = ({
	dontCareRatingValue,
	threeAndMoreValue,
	threeAndFiveAndMoreValue,
	fourAndMoreValue,
	fourAndFiveAndMore,
}) => {
	const dispatch = useAppDispatch()
	return (
		<div className={styles.RatingFilter}>
			<h3 className='mainPageFilterTitles'>Рейтинг</h3>
			<div className={styles.RatingFilterCheckboxes}>
				<div className={styles.RatingFilterItem}>
					<CheckBoxMainPage
						checked={dontCareRatingValue}
						onChange={e => dispatch(setDontCareRating(!dontCareRatingValue))}
					/>
					<span>Любой</span>
				</div>
				<div className={styles.RatingFilterItem}>
					<CheckBoxMainPage
						checked={threeAndMoreValue}
						onChange={e => dispatch(setThreeAndMore(!threeAndMoreValue))}
					/>
					<span>3,0 и более</span>
				</div>
				<div className={styles.RatingFilterItem}>
					<CheckBoxMainPage
						checked={threeAndFiveAndMoreValue}
						onChange={e =>
							dispatch(setThreeAndFiveAndMore(!threeAndFiveAndMoreValue))
						}
					/>
					<span>3,5 и более</span>
				</div>
				<div className={styles.RatingFilterItem}>
					<CheckBoxMainPage
						checked={fourAndMoreValue}
						onChange={e => dispatch(setFourAndMore(!fourAndMoreValue))}
					/>
					<span>4,0 и более</span>
				</div>
				<div className={styles.RatingFilterItem}>
					<CheckBoxMainPage
						checked={fourAndFiveAndMore}
						onChange={e => dispatch(setFourAndFiveAndMore(!fourAndFiveAndMore))}
					/>
					<span>4,5 и более</span>
				</div>
			</div>
		</div>
	)
}

export default RatingFilter
