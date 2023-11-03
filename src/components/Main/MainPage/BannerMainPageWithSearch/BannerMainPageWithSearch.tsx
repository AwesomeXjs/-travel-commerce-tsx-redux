import { FC, MouseEvent } from 'react'
import {
	RiAlarmLine,
	RiHeartPulseFill,
	RiHotelLine,
	RiTreeLine,
} from 'react-icons/ri'
import { GiHotSurface } from 'react-icons/gi'
import { LuCalendarSearch } from 'react-icons/lu'

import logo from '../../../../assets/ulyDalaBack.png'
import styles from './BannerMainPageWithSearch.module.scss'
import { useAppDispatch, useAppSelector } from '../../../../custom/hooks'
import {
	selectDataStatus,
	selectWho,
	setDataStatus,
} from '../../../../state/Slices/MainPageSlice/MainPageSlice'
import { PiMapPinLine } from 'react-icons/pi'
import { AiOutlineUser } from 'react-icons/ai'
import CalendarPicker from './CalendarPicker/CalendarPicker'
import CustomButton from '../../../../custom/UI/CustomButton/CustomButton'

const BannerMainPageWithSearch: FC = () => {
	const dataStatus = useAppSelector(selectDataStatus)
	const dataWho = useAppSelector(selectWho)
	const dispatch = useAppDispatch()

	const searchSubmitHandler = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
	}
	return (
		<>
			<div className={styles.mainBannerWrapper}>
				<div className={styles.mainBannerImageWrapper}></div>
				<div className={styles.mainLogoBackWrapper}>
					<img src={logo} alt='logo' />
				</div>
				<div className={styles.mainFilterWrapper}>
					<div>
						<div className={styles.categories}>
							<div
								onClick={() => dispatch(setDataStatus('hotels'))}
								className={
									dataStatus === 'hotels'
										? `${styles.hotels} ${styles.active}`
										: styles.hotels
								}
							>
								<RiHotelLine />
								<span>Отели</span>
							</div>
							<div
								onClick={() => dispatch(setDataStatus('sanatoriums'))}
								className={
									dataStatus === 'sanatoriums'
										? `${styles.hotels} ${styles.active}`
										: styles.hotels
								}
							>
								<RiHeartPulseFill />
								<span>Санатории</span>
							</div>
							<div
								onClick={() => dispatch(setDataStatus('fewDays'))}
								className={
									dataStatus === 'fewDays'
										? `${styles.hotels} ${styles.active}`
										: styles.hotels
								}
							>
								<RiAlarmLine />
								<span>1-3 дневные</span>
							</div>
							<div
								onClick={() => dispatch(setDataStatus('camps'))}
								className={
									dataStatus === 'camps'
										? `${styles.hotels} ${styles.active}`
										: styles.hotels
								}
							>
								<RiTreeLine />
								<span>Лагеря</span>
							</div>
							<div
								onClick={() => dispatch(setDataStatus('hotSprings'))}
								className={
									dataStatus === 'hotSprings'
										? `${styles.hotels} ${styles.active}`
										: styles.hotels
								}
							>
								<GiHotSurface />
								<span>Горячие источники</span>
							</div>
						</div>
						<form action='submit' className={styles.searchContent}>
							<div className={styles.mainWhere}>
								<PiMapPinLine className={styles.icon} />
								<div className={styles.whereContent}>
									<span>Куда?</span>
									<input
										placeholder='Весь Казахстан'
										className={styles.inputWhere}
										type='text'
									/>
								</div>
							</div>
							<div className={styles.mainWhen}>
								<LuCalendarSearch className={styles.icon} />
								<div className={styles.whenContent}>
									<span>Когда?</span>
									<CalendarPicker />
								</div>
							</div>
							<div className={styles.mainWho}>
								<AiOutlineUser className={styles.icon} />
								<div className={styles.whoContent}>
									<span>Кто?</span>
									<div>{dataWho} взр</div>
									<div className={styles.whoChanger}></div>
								</div>
							</div>
							<CustomButton
								onClick={searchSubmitHandler}
								style={{ maxWidth: '120px', borderRadius: '32px' }}
								variant='orange'
								type='submit'
							>
								Найти
							</CustomButton>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default BannerMainPageWithSearch
