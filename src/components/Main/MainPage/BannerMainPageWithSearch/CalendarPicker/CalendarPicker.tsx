import { FC, useEffect, useState, useRef, MouseEvent } from 'react'
import { DateRange } from 'react-date-range'
import format from 'date-fns/format'
import { addDays } from 'date-fns'

import styles from './CalendarPicker.module.scss'
import 'react-date-range/dist/styles.css' // main css file
import 'react-date-range/dist/theme/default.css' // theme css file
import { useAppDispatch, useAppSelector } from '../../../../../custom/hooks'
import {
	selectCalendarWindowOpen,
	selectDate,
	setCalendarWindowOpen,
	setDateCalendar,
} from '../../../../../state/Slices/MainPageSlice/MainPageSlice'
import CustomButton from '../../../../../custom/UI/CustomButton/CustomButton'

const CalendarPicker: FC = () => {
	const [range, setRange] = useState([
		{
			startDate: new Date(),
			endDate: addDays(new Date(), 7),
			key: 'selection',
		},
	])
	const calendarValue = useAppSelector(selectDate)
	const calendarWindowOpen = useAppSelector(selectCalendarWindowOpen)

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
	const addRandomDatesHandler = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		dispatch(setDateCalendar('Любые даты'))
	}

	const hideOnEscape = (e: any) => {
		if (e.key === 'Escape') {
			dispatch(setCalendarWindowOpen(false))
		}
	}

	const refHide = useRef(null)
	const hideClickOutside = (e: any) => {
		// @ts-ignore
		if (refHide.current && !refHide.current.contains(e.target)) {
			dispatch(setCalendarWindowOpen(false))
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', hideOnEscape, true)
		document.addEventListener('click', hideClickOutside, true)
	}, [])
	return (
		<>
			<input
				onClick={() => dispatch(setCalendarWindowOpen(!calendarWindowOpen))}
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
			{calendarWindowOpen && (
				<div className={styles.calendarElement} ref={refHide}>
					{
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
							<div className={styles.buttonsWrapper}>
								<CustomButton
									style={{ marginBottom: '15px', fontSize: '14px' }}
									variant='backWhiteBorderGreen'
									onClick={addRandomDatesHandler}
								>
									Любые даты
								</CustomButton>
								<CustomButton
									style={{ fontSize: '14px' }}
									variant='green'
									onClick={addCalendarDateHandler}
								>
									Выбрать эти даты
								</CustomButton>
							</div>
						</>
					}
				</div>
			)}
		</>
	)
}

export default CalendarPicker
