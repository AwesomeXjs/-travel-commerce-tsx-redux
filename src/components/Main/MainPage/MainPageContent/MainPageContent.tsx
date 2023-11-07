import { FC, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './MainPageContent.module.scss'
import MainPageFilter from './MainPageFilter/MainPageFilter'
import SliderBanner from './SliderBanner/SliderBanner'
import HeaderDataListSortButton from './HeaderDataListSortButton/HeaderDataListSortButton'

import { useAppDispatch, useAppSelector } from '../../../../custom/hooks'
import { setDataState } from '../../../../state/Slices/MainPageSlice/MainPageSlice'
import { hotelsData } from '../../../Data/Hotels'
import DataItem from './DataItem/DataItem'
interface MainPageContentProps {}

const MainPageContent: FC<MainPageContentProps> = () => {
	const { initialDataState, who, whoChildren, date } = useAppSelector(
		state => state.mainPage
	)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(setDataState(hotelsData))
	}, [dispatch])

	//тотал прайс без скидки:
	return (
		<>
			<div className={`${styles.mainPageContentWrapper} container`}>
				<MainPageFilter />
				<div className={styles.mainPageDataWrapper}>
					<SliderBanner />
					<HeaderDataListSortButton />
					{initialDataState.map((el, i) => {
						if (i < 2) {
							return (
								<DataItem
									key={uuidv4()}
									el={el}
									who={who}
									whoChildren={whoChildren}
									date={date}
								/>
							)
						}
					})}
					<SliderBanner />
					{initialDataState.map((el, i) => {
						if (i > 2) {
							return (
								<DataItem
									key={uuidv4()}
									el={el}
									who={who}
									whoChildren={whoChildren}
									date={date}
								/>
							)
						}
					})}
				</div>
			</div>
			)
		</>
	)
}

export default MainPageContent
