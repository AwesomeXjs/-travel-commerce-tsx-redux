import { useState } from 'react'
import { useDispatch } from 'react-redux'

import MyOrder from './MyOrder/MyOrder'
import styles from './MainPageFilter.module.scss'
import PriceFilter from './PriceFilter/PriceFilter'
import { useAppSelector } from '../../../../../custom/hooks'
import AdditionalyFilter from './AdditionalyFilter/AdditionalyFilter'
import EatFilter from './EatFfilter/EatFilter'
import RatingFilter from './RatingFilter/RatingFilter'
import PlaceFilter from './PlaceFilter/PlaceFilter'
import RoomsFilter from './RoomsFilter/RoomsFilter'
import { setResetAllFilters } from '../../../../../state/Slices/MainPageSlice/MainPageSlice'
import CustomButton from '../../../../../custom/UI/CustomButton/CustomButton'

function valuetext(value: number) {
	return `${value}°C`
}

const MainPageFilter = () => {
	const dispatch = useDispatch()
	const filterState = useAppSelector(
		state => state.mainPage.mainPageFilterInputs
	)

	//////////////////////   INPUTS /////////////////////
	//Another Spot

	//Price Filter Slider
	const [value, setValue] = useState<number[]>([20, 37])
	const handleChange = (event: any, newValue: number | number[]) => {
		setValue(newValue as number[])
	}

	//filter
	/* const filteredBooks = books.filter(book => {
		const matchesTitles = book.title
			.toLowerCase()
			.includes(titleFilter.toLowerCase())
		const matchesAuthor = book.author
			.toLowerCase()
			.includes(authorFilter.toLowerCase())
		const matchesFavorite = isFavorites ? book.isFavorite : true
		return matchesTitles && matchesAuthor && matchesFavorite
	}) */

	const {
		anotherSpot,
		//additionaly
		pool,
		animators,
		training,
		powerForCars,
		//Eat filter
		allIncludes,
		onlyBreakfast,
		breakfastAndDinner,
		thirdEat,
		withoutEat,
		//Rating Filter
		dontCareRating,
		threeAndMore,
		threeAndFiveAndMore,
		fourAndMore,
		fourAndFiveAndMore,
		//place fitler
		dontCarePlace,
		hotels,
		base,
		hostels,
		cottages,
		//rooms filter
		dontCareRooms,
		oneAndMoreRooms,
		twoAndMoreRooms,
		threeAndMoreRooms,
		fiveAndMoreRooms,
	} = filterState

	return (
		<div className={styles.mainPageFilterWrapper}>
			<MyOrder anotherSpot={anotherSpot} />
			<PriceFilter
				valuetext={valuetext}
				value={value}
				handleChange={handleChange}
			/>
			<AdditionalyFilter
				poolValue={pool}
				animatorsValue={animators}
				trainingValue={training}
				powerForCarsValue={powerForCars}
			/>
			<EatFilter
				allIncludesValue={allIncludes}
				onlyBreakfastValue={onlyBreakfast}
				breakfastAndDinnerValue={breakfastAndDinner}
				thirdEatValue={thirdEat}
				withoutEatValue={withoutEat}
			/>
			<RatingFilter
				dontCareRatingValue={dontCareRating}
				threeAndMoreValue={threeAndMore}
				threeAndFiveAndMoreValue={threeAndFiveAndMore}
				fourAndMoreValue={fourAndMore}
				fourAndFiveAndMore={fourAndFiveAndMore}
			/>
			<PlaceFilter
				dontCarePlaceValue={dontCarePlace}
				selectHotelsValue={hotels}
				selectBaseValue={base}
				selectHostelsValue={hostels}
				selectCottagesValue={cottages}
			/>
			<RoomsFilter
				dontCareRooms={dontCareRooms}
				oneAndMoreRooms={oneAndMoreRooms}
				twoAndMoreRooms={twoAndMoreRooms}
				threeAndMoreRooms={threeAndMoreRooms}
				fiveAndMoreRooms={fiveAndMoreRooms}
			/>
			<div className={styles.buttonWrapper}>
				<CustomButton
					style={{ borderRadius: '10px' }}
					variant='backWhiteBorderBlue'
					onClick={() => dispatch(setResetAllFilters())}
				>
					Сбросить фильтр
				</CustomButton>
			</div>
		</div>
	)
}

export default MainPageFilter
