import { FC, FormEvent } from 'react'
import { LuCalendarSearch } from 'react-icons/lu'

import logo from '../../../../assets/ulyDalaBack.png'
import styles from './BannerMainPageWithSearch.module.scss'
import { useAppSelector } from '../../../../custom/hooks'
import {
	selectBackgroundOpacity,
	selectCalendarWindowOpen,
	selectDataStatus,
	selectDate,
	selectWhere,
	selectWhereWindowOpen,
	selectWho,
	selectWhoChildren,
	selectWhoWindowOpen,
} from '../../../../state/Slices/MainPageSlice/MainPageSlice'

import CalendarPicker from './CalendarPicker/CalendarPicker'
import CustomButton from '../../../../custom/UI/CustomButton/CustomButton'
import WhoChanger from './WhoChanger/WhoChanger'
import WhereChanger from './WhereChanger/WhereChanger'
import Categories from './Categories/Categories'
import MobileVersionCategories from './MobileVersionCategories/MobileVersionCategories'

const BannerMainPageWithSearch: FC = () => {
	const dataStatus = useAppSelector(selectDataStatus)
	const dataWho = useAppSelector(selectWho)
	const dataWhoChildren = useAppSelector(selectWhoChildren)
	const dataWhoOpenWindow = useAppSelector(selectWhoWindowOpen)
	const dataWhere = useAppSelector(selectWhere)
	const whereWindowOpen = useAppSelector(selectWhereWindowOpen)
	const backGroundOpacity = useAppSelector(selectBackgroundOpacity)
	const calendarValue = useAppSelector(selectDate)
	const calendarWindowOpen = useAppSelector(selectCalendarWindowOpen)
	const backgroundOpacity = useAppSelector(selectBackgroundOpacity)

	//отправка результата формы
	const searchSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
	}

	return (
		<div>
			<div className={styles.mainBannerWrapper}>
				<div className={styles.mainBannerImageWrapper}></div>
				<div className={styles.mainLogoBackWrapper}>
					<img src={logo} alt='logo' />
				</div>
				<div className={styles.mainFilterWrapper}>
					<div className={styles.mobileVersionSearch}>
						{<Categories dataStatus={dataStatus} />}
						{
							<div className={styles.mobileVersionSliderCategory}>
								<h1>Найти подходящий тур</h1>
								<div className={styles.sliderWrapper}>
									<MobileVersionCategories />
								</div>
							</div>
						}

						<form
							action='submit'
							onSubmit={searchSubmitHandler}
							className={styles.searchContent}
						>
							<WhereChanger
								backgroundOpacity={backGroundOpacity}
								dataWhere={dataWhere}
								whereWindowOpen={whereWindowOpen}
							/>
							<div
								className={
									calendarWindowOpen
										? `${styles.mainWhen} ${styles.activeBackgroundOpacity}`
										: styles.mainWhen
								}
							>
								<LuCalendarSearch className={styles.icon} />
								<div className={styles.whenContent}>
									<span>Когда?</span>
									<CalendarPicker
										calendarValue={calendarValue}
										calendarWindowOpen={calendarWindowOpen}
										backgroundOpacity={backgroundOpacity}
									/>
								</div>
							</div>
							<WhoChanger
								backgroundOpacity={backGroundOpacity}
								dataWho={dataWho}
								dataWhoChildren={dataWhoChildren}
								dataWhoOpenWindow={dataWhoOpenWindow}
							/>
							<CustomButton
								style={{ borderRadius: '32px' }}
								variant='orange'
								type='submit'
							>
								Найти
							</CustomButton>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BannerMainPageWithSearch
