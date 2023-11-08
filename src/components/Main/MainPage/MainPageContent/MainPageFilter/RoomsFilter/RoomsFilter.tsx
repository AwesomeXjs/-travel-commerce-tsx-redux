import { FC } from 'react'
import CheckBoxMainPage from '../../../../../../custom/UI/CheckBoxMainPage/CheckBoxMainPage'
import styles from './RoomsFilter.module.scss'
import { useAppDispatch } from '../../../../../../custom/hooks'
import {
	setDontCareRooms,
	setFiveAndMoreRooms,
	setOneAndMoreRooms,
	setThreeAndMoreRooms,
	setTwoAndMoreRooms,
} from '../../../../../../state/Slices/MainPageSlice/MainPageSlice'

export interface RoomsFilterProps {
	dontCareRooms: boolean
	oneAndMoreRooms: boolean
	twoAndMoreRooms: boolean
	threeAndMoreRooms: boolean
	fiveAndMoreRooms: boolean
}

const RoomsFilter: FC<RoomsFilterProps> = ({
	dontCareRooms,
	oneAndMoreRooms,
	twoAndMoreRooms,
	threeAndMoreRooms,
	fiveAndMoreRooms,
}) => {
	const dispatch = useAppDispatch()
	return (
		<div className={styles.RoomsFilter}>
			<h3 className='mainPageFilterTitles'>Количество комнат</h3>
			<div className={styles.RoomsFilterCheckboxes}>
				<div className={styles.RoomsFilterItem}>
					<CheckBoxMainPage
						checked={dontCareRooms}
						onChange={e => dispatch(setDontCareRooms(!dontCareRooms))}
					/>
					<span>Любой</span>
				</div>
				<div className={styles.RoomsFilterItem}>
					<CheckBoxMainPage
						checked={oneAndMoreRooms}
						onChange={e => dispatch(setOneAndMoreRooms(!oneAndMoreRooms))}
					/>
					<span>1 комната и больше (20)</span>
				</div>
				<div className={styles.RoomsFilterItem}>
					<CheckBoxMainPage
						checked={twoAndMoreRooms}
						onChange={e => dispatch(setTwoAndMoreRooms(!twoAndMoreRooms))}
					/>
					<span>2 комната и больше (15)</span>
				</div>
				<div className={styles.RoomsFilterItem}>
					<CheckBoxMainPage
						checked={threeAndMoreRooms}
						onChange={e => dispatch(setThreeAndMoreRooms(!threeAndMoreRooms))}
					/>
					<span>3 комната и больше (10)</span>
				</div>
				<div className={styles.RoomsFilterItem}>
					<CheckBoxMainPage
						checked={fiveAndMoreRooms}
						onChange={e => dispatch(setFiveAndMoreRooms(!fiveAndMoreRooms))}
					/>
					<span>5 комната и больше (2)</span>
				</div>
			</div>
		</div>
	)
}

export default RoomsFilter
