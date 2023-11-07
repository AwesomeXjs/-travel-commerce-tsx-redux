import Slider from 'react-slick'

import styles from './SliderBanner.module.scss'
import { initialSlides } from '../../../../Data/SliderSlides'
import { setSliderState } from '../../../../../state/Slices/MainPageSlice/MainPageSlice'
import { useAppDispatch, useAppSelector } from '../../../../../custom/hooks'

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

	dispatch(setSliderState(initialSlides))
	return (
		<div className={styles.sliderWrapper}>
			<Slider {...settings}>
				{sliderSlides.map(el => {
					return (
						<div className={styles.sliderItem}>
							<img src={el} alt='slide' />
						</div>
					)
				})}
			</Slider>
		</div>
	)
}

export default SliderBanner
