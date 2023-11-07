import Slider from 'react-slick'
import { v4 as uuidv4 } from 'uuid'

import styles from './SliderBanner.module.scss'
import { initialSlides } from '../../../../Data/SliderSlides'
import { setSliderState } from '../../../../../state/Slices/MainPageSlice/MainPageSlice'
import { useAppDispatch, useAppSelector } from '../../../../../custom/hooks'
import { useEffect } from 'react'

const SliderBanner = () => {
	const sliderSlides = useAppSelector(
		state => state.mainPage.sliderInitialState
	)
	const dispatch = useAppDispatch()

	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		slidesToShow: 1,
		autoplaySpeed: 3000,
		slidesToScroll: 1,
		cssEase: 'linear',
	}
	useEffect(() => {
		dispatch(setSliderState(initialSlides))
	}, [dispatch])

	return (
		<div className={styles.sliderWrapper}>
			<Slider {...settings}>
				{sliderSlides.map(el => {
					return (
						<div key={uuidv4()} className={styles.sliderItem}>
							<img src={el} alt='slide' />
						</div>
					)
				})}
			</Slider>
		</div>
	)
}

export default SliderBanner
