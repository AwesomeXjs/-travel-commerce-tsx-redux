import { FC } from 'react'
import styles from './MyOrder.module.scss'
import { PiMapPinLine } from 'react-icons/pi'
import { LuCalendarSearch } from 'react-icons/lu'
import { AiOutlineUser } from 'react-icons/ai'
import CheckBoxMainPage from '../../../../../../custom/UI/CheckBoxMainPage/CheckBoxMainPage'
import { useAppDispatch, useAppSelector } from '../../../../../../custom/hooks'
import {
	selectDate,
	selectWhere,
	selectWho,
	selectWhoChildren,
	setAnotherSpot,
} from '../../../../../../state/Slices/MainPageSlice/MainPageSlice'

export interface MyOrderProps {
	anotherSpot: boolean
}

const MyOrder: FC<MyOrderProps> = ({ anotherSpot }) => {
	const where = useAppSelector(selectWhere)
	const when = useAppSelector(selectDate)
	const whoOld = useAppSelector(selectWho)
	const whoChild = useAppSelector(selectWhoChildren)

	const dispatch = useAppDispatch()
	return (
		<div className={styles.myOrderWrapper}>
			<h3 className={'mainPageFilterTitles'}>Ваш запрос</h3>
			<div className={styles.mainPageFilterWhere}>
				<PiMapPinLine className={styles.mainPageFilterIcon} />
				<span>{where}</span>
			</div>
			<div className={styles.mainPageFilterWhen}>
				<LuCalendarSearch className={styles.mainPageFilterIcon} />
				<span>
					{when.length <= 2 ? `${when[0]} до ${when[1]}` : 'Любые даты'}
				</span>
			</div>
			<div className={styles.mainPageFilterWho}>
				<AiOutlineUser className={styles.mainPageFilterIcon} />
				<span>
					{whoOld} взр {whoChild > 0 ? `, ${whoChild} дет.` : ''}
				</span>
			</div>
			<div className={styles.inputWrapper}>
				<CheckBoxMainPage
					onChange={e => dispatch(setAnotherSpot(e.checked))}
					checked={anotherSpot}
				/>
				<span className={styles.mainPageFilterWithAnotherPlace}>
					Показывать с доп. местом
				</span>
			</div>
		</div>
	)
}

export default MyOrder
