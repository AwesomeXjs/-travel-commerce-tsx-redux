import { FC } from 'react'
import Rating from '@material-ui/lab/Rating'

import styles from './MainPageContent.module.scss'
import MainPageFilter from './MainPageFilter/MainPageFilter'
import SliderBanner from './SliderBanner/SliderBanner'
import HeaderDataListSortButton from './HeaderDataListSortButton/HeaderDataListSortButton'
import hotelImage from '../../../../assets/hotelImageMainPage.png'
import eatIcon from '../../../../assets/eatIcon.png'
import hrAirplanePC from '../../../../assets/airplaneItemPcVersion.png'

import { BsMoon, BsSun } from 'react-icons/bs'
import CustomButton from '../../../../custom/UI/CustomButton/CustomButton'
interface MainPageContentProps {}

const MainPageContent: FC<MainPageContentProps> = () => {
	return (
		<div className={`${styles.mainPageContentWrapper} container`}>
			<MainPageFilter />
			<div className={styles.mainPageDataWrapper}>
				<SliderBanner />
				<HeaderDataListSortButton />
				<div className={styles.itemWrapper}>
					<div className={styles.itemImageWrapper}>
						<img className={styles.hotelImage} src={hotelImage} alt='hotel' />
					</div>
					<div className={styles.itemContentWrapper}>
						<h5 className={styles.itemContentTitle}>Отель Каравансарай</h5>
						<span className={styles.itemContentPlace}>
							Алматинская область, Казахстан
						</span>
						<div className={styles.itemContentRating}>
							<Rating
								style={{ marginRight: '10px' }}
								precision={0.5}
								name='read-only'
								value={4.5}
								readOnly
							/>

							<span className={styles.itemContentRatingValue}>Рейтинг 4.5</span>
						</div>
						<div className={styles.itemContentEat}>
							<img src={eatIcon} alt='eat' />
							<span>Завтрак</span>
						</div>
						<div className={styles.itemContentDescription}>
							Lorem ipsum dolor sit amet, id dicant splendide cum. Lorem ipsum
							dolor sit amet, id dicant splendide cum. Lorem ipsum dolor sit
							amet, id dicant splendide cum. Lorem ipsum dolor sit amet, id
							dicant splendide cum.
						</div>
						<div className={styles.itemContentAdditional}>
							<div className={styles.itemContentAdditionalItem}>Аниматоры</div>
							<div className={styles.itemContentAdditionalItem}>Бассейн</div>
							<div className={styles.itemContentAdditionalItem}>Wi-Fi</div>
						</div>
					</div>
					<div>
						<img className={styles.hrAirplane} src={hrAirplanePC} alt='' />
					</div>
					<div className={styles.itemPriceWrapper}>
						<div className={styles.itemPrice}>
							<div className={styles.itemPriceDefault}> 44 000 тг </div>
							<div className={styles.itemPriceFinaly}>
								<span>от</span> 36 000 <span>тг</span>
								<div className={styles.itemPricePersons}>
									На 2 взр. и 2 дет.
								</div>
							</div>
						</div>
						<div className={styles.itemPriceDate}>
							<div className={styles.itemPriceWhen}>с 27.07 по 30.07</div>
							<div className={styles.itemPriceHowMuchDayAndNight}>
								<div className={styles.itemPriceDays}>
									<BsSun className={styles.itemPriceIcons} />
									<span>5 дней</span>
								</div>
								<div className={styles.itemPriceDays}>
									<BsMoon className={styles.itemPriceIcons} />
									<span>4 ночи</span>
								</div>
							</div>
						</div>
						<CustomButton variant='orange'>Подробнее</CustomButton>
					</div>
				</div>
				<div className={styles.itemWrapper}>
					<div className={styles.itemImageWrapper}>
						<img className={styles.hotelImage} src={hotelImage} alt='hotel' />
					</div>
					<div className={styles.itemContentWrapper}>
						<h5 className={styles.itemContentTitle}>Отель Каравансарай</h5>
						<span className={styles.itemContentPlace}>
							Алматинская область, Казахстан
						</span>
						<div className={styles.itemContentRating}>
							<Rating
								style={{ marginRight: '10px' }}
								precision={0.5}
								name='read-only'
								value={4.5}
								readOnly
							/>

							<span className={styles.itemContentRatingValue}>Рейтинг 4.5</span>
						</div>
						<div className={styles.itemContentEat}>
							<img src={eatIcon} alt='eat' />
							<span>Завтрак</span>
						</div>
						<div className={styles.itemContentDescription}>
							Lorem ipsum dolor sit amet, id dicant splendide cum. Lorem ipsum
							dolor sit amet, id dicant splendide cum. Lorem ipsum dolor sit
							amet, id dicant splendide cum. Lorem ipsum dolor sit amet, id
							dicant splendide cum.
						</div>
						<div className={styles.itemContentAdditional}>
							<div className={styles.itemContentAdditionalItem}>Аниматоры</div>
							<div className={styles.itemContentAdditionalItem}>Бассейн</div>
							<div className={styles.itemContentAdditionalItem}>Wi-Fi</div>
						</div>
					</div>
					<div>
						<img className={styles.hrAirplane} src={hrAirplanePC} alt='' />
					</div>
					<div className={styles.itemPriceWrapper}>
						<div className={styles.itemPrice}>
							<div className={styles.itemPriceDefault}> 44 000 тг </div>
							<div className={styles.itemPriceFinaly}>
								<span>от</span> 36 000 <span>тг</span>
								<div className={styles.itemPricePersons}>
									На 2 взр. и 2 дет.
								</div>
							</div>
						</div>
						<div className={styles.itemPriceDate}>
							<div className={styles.itemPriceWhen}>с 27.07 по 30.07</div>
							<div className={styles.itemPriceHowMuchDayAndNight}>
								<div className={styles.itemPriceDays}>
									<BsSun className={styles.itemPriceIcons} />
									<span>5 дней</span>
								</div>
								<div className={styles.itemPriceDays}>
									<BsMoon className={styles.itemPriceIcons} />
									<span>4 ночи</span>
								</div>
							</div>
						</div>
						<CustomButton variant='orange'>Подробнее</CustomButton>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainPageContent
