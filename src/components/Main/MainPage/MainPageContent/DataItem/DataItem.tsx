import { FC } from 'react'
import { HotelType } from '../../../../../types/DataTypes'
import styles from './DataItem.module.scss'
import Rating from '@material-ui/lab/Rating'
import hrAirplanePc from '../../../../../assets/airplaneItemPcVersion.png'
import { BsMoon, BsSun } from 'react-icons/bs'
import CustomButton from '../../../../../custom/UI/CustomButton/CustomButton'
import { dayDifference } from '../../../../../custom/functions'

export interface DataItemProps {
	el: HotelType
	who: number
	whoChildren: number
	date: string | string[]
	key?: string
}

const DataItem: FC<DataItemProps> = ({ el, who, whoChildren, date }) => {
	return (
		<div className={styles.itemWrapper}>
			<div className={styles.itemImageWrapper}>
				<img className={styles.hotelImage} src={el.image} alt='hotel' />
				{el.discount > 0 && (
					<div className={styles.itemContentDiscount}>-{el.discount}%</div>
				)}
			</div>
			<div className={styles.itemContentWrapper}>
				<h5 className={styles.itemContentTitle}>{el.title}</h5>
				<span className={styles.itemContentPlace}>
					{el.location.place}, {el.location.country}
				</span>
				<div className={styles.itemContentRating}>
					<Rating
						style={{ marginRight: '10px' }}
						precision={0.5}
						name='read-only'
						value={el.rating}
						readOnly
					/>

					<span className={styles.itemContentRatingValue}>
						Рейтинг {el.rating}
					</span>
				</div>
				<div className={styles.itemContentEat}>
					<img src={el.eatIcon} alt='eat' />
					{el.eat.breakfast && <span>Завтрак</span>}
					{el.eat.allIncludesEat && <span>Все включено</span>}
					{el.eat.dinnerAndBreakfast && <span>Завтрак и ужин</span>}
					{el.eat.thirdEat && <span>3-х разовое</span>}
					{el.eat.withoutEat && <span>Без еды</span>}
				</div>
				<div className={styles.itemContentDescription}>{el.discription}</div>
				<div className={styles.itemContentAdditional}>
					{el.additional.animators && (
						<div className={styles.itemContentAdditionalItem}>Аниматоры</div>
					)}
					{el.additional.pool && (
						<div className={styles.itemContentAdditionalItem}>Бассейн</div>
					)}
					{el.additional.powerForCars && (
						<div className={styles.itemContentAdditionalItem}>
							Зарядка для автомобилей
						</div>
					)}
					{el.additional.training && (
						<div className={styles.itemContentAdditionalItem}>Тренировки</div>
					)}
					<div className={styles.itemContentAdditionalItem}>Wi-Fi</div>
				</div>
			</div>
			<div>
				<img className={styles.hrAirplane} src={hrAirplanePc} alt='' />
			</div>
			<div className={styles.itemPriceWrapper}>
				<div className={styles.itemPrice}>
					{!!el.discount && (
						<div className={styles.itemPriceDefault}>
							{el.pricePerPerson * who +
								whoChildren * el.pricePerPersonChildren}
							тг
						</div>
					)}
					<div className={styles.itemPriceFinaly}>
						{!!el.discount ? (
							<>
								<span>от </span>
								{el.pricePerPerson * who +
									whoChildren * el.pricePerPersonChildren -
									((el.pricePerPerson * who +
										whoChildren * el.pricePerPersonChildren) /
										100) *
										el.discount}
								<span>тг</span>
							</>
						) : (
							<>
								<span>от </span>
								{el.pricePerPerson * who +
									whoChildren * el.pricePerPersonChildren}
								<span>тг</span>
							</>
						)}

						<div className={styles.itemPricePersons}>
							На {who} взр. {!!whoChildren && `и ${whoChildren} дет.`}
						</div>
					</div>
				</div>
				{date.length <= 2 && (
					<div className={styles.itemPriceDate}>
						{
							<div className={styles.itemPriceWhen}>
								с {date[0]} по {date[1]}
							</div>
						}
						<div className={styles.itemPriceHowMuchDayAndNight}>
							<div className={styles.itemPriceDays}>
								<BsSun className={styles.itemPriceIcons} />
								<span>
									{typeof date !== 'string' && dayDifference(date) + 1} дней
								</span>
							</div>
							<div className={styles.itemPriceDays}>
								<BsMoon className={styles.itemPriceIcons} />
								<span>
									{typeof date !== 'string' && dayDifference(date)} ночи
								</span>
							</div>
						</div>
					</div>
				)}
				<CustomButton variant='orange'>Подробнее</CustomButton>
			</div>
		</div>
	)
}

export default DataItem
