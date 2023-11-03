import { FC, useEffect, useState, useRef, MouseEvent } from 'react'
import { DateRange } from 'react-date-range'
import format from 'date-fns/format'
import { addDays } from 'date-fns'

import styles from './CalendarPicker.module.scss'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { useAppDispatch, useAppSelector } from '../../../../../custom/hooks'
import {
	selectDate,
	setDateCalendar,
} from '../../../../../state/Slices/MainPageSlice/MainPageSlice'

const CalendarPicker: FC = () => {
	const [range, setRange] = useState([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: 'selection',
		},
	])
	const calendarValue = useAppSelector(selectDate)

	const dispatch = useAppDispatch()

	const addCalendarDateHandler = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		dispatch(
			setDateCalendar([
				`${format(range[0].startDate, 'MM.dd.yyy')}`,
				`${format(range[0].endDate, 'MM.dd.yyy')}`,
			])
		)
	}

	const [openCalendar, setOpenCalendar] = useState<boolean>(false)
	const hideOnEscape = (e: any) => {
		if (e.key === 'Escape') {
			setOpenCalendar(false)
		}
	}

	const refHide = useRef(null)
	const hideClickOutside = (e: any) => {
		// @ts-ignore
		if (refHide.current && !refHide.current.contains(e.target)) {
			setOpenCalendar(false)
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', hideOnEscape, true)
		document.addEventListener('click', hideClickOutside, true)
	}, [])
	return (
		<>
			<input
				onClick={() => setOpenCalendar(!openCalendar)}
				readOnly
				className={styles.inputCalendar}
				value={
					calendarValue.length <= 2
						? `${format(range[0].startDate, 'dd.MM.yyy')} до ${format(
								range[0].endDate,
								'dd.MM.yyy'
						  )} `
						: 'Любые даты'
				}
			/>
			<div className={styles.calendarElement} ref={refHide}>
				{openCalendar && (
					<>
						<DateRange
							className={styles.calendar}
							date={new Date()}
							editableDateInputs={true}
							moveRangeOnFirstSelection={false}
							ranges={range}
							months={1}
							direction='horizontal'
							//@ts-ignore
							onChange={item => setRange([item.selection])}
						/>
						<button
							onClick={addCalendarDateHandler}
							className={styles.randomButtonCalendar}
						>
							Любые даты
						</button>
						<button
							onClick={addCalendarDateHandler}
							className={styles.buttonCalendar}
						>
							Выбрать эти даты
						</button>
					</>
				)}
			</div>
		</>
	)
}

export default CalendarPicker
