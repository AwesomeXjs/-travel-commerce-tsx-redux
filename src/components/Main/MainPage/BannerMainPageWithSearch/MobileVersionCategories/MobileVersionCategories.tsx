import { FC } from 'react'
import styles from './MobileVersionCategories.module.scss'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { arrayCategories } from '../Categories/CategoryArray'
import CategoryItem from '../Categories/CategoryItem/CategoryItem'
import { selectDataStatus } from '../../../../../state/Slices/MainPageSlice/MainPageSlice'
import { useAppSelector } from '../../../../../custom/hooks'

const MobileVersionCategories: FC = () => {
	const dataStatus = useAppSelector(selectDataStatus)
	const settings = {
		className: 'center',
		/* 	centerMode: true,
		infinite: true,
		centerPadding: '120px', */
		slidesToShow: 3,
		speed: 200,
		pauseOnHover: true,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 1,
				},
			},
		],
	}
	return (
		<div className={styles.slider}>
			<Slider {...settings}>
				{arrayCategories.map(e => (
					<CategoryItem dataStatus={dataStatus} e={e} />
				))}
			</Slider>
		</div>
	)
}

export default MobileVersionCategories
