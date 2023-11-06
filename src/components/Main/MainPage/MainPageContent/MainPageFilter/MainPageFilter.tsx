import { useState } from 'react'
import styles from './MainPageFilter.module.scss'
import { makeStyles } from '@material-ui/core/styles'

import MyOrder from './MyOrder/MyOrder'

import PriceFilter from './PriceFilter/PriceFilter'
import { useAppSelector } from '../../../../../custom/hooks'
import { useDispatch } from 'react-redux'
import AdditionalyFilter from './AdditionalyFilter/AdditionalyFilter'
import EatFilter from './EatFfilter/EatFilter'

import RatingFilter from './RatingFilter/RatingFilter'
import PlaceFilter from './PlaceFilter/PlaceFilter'

import RoomsFilter from './RoomsFilter/RoomsFilter'
import { setResetAllFilters } from '../../../../../state/Slices/MainPageSlice/MainPageSlice'
import CustomButton from '../../../../../custom/UI/CustomButton/CustomButton'

const useStyles = makeStyles({
	root: {
		width: 300,
	},
})

function valuetext(value: number) {
	return `${value}°C`
}

const MainPageFilter = () => {
	const classes = useStyles()
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
	//Additionaly filter

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
				classes={classes}
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
