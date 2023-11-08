import { FC } from 'react'
import styles from './FourTourists.module.scss'

export interface FourTouristsProps {
	hoverEffect: string
}

const FourTourists: FC<FourTouristsProps> = ({ hoverEffect }) => {
	return (
		<div className={styles.forTourists}>
			<h5 className={styles.forTouristTitle}>Туристам</h5>
			<div className={styles.forTouristContent}>
				<div className={styles.forTouristContentColumn}>
					<span>
						<a className={hoverEffect} href='#'>
							1-3 дневные туры
						</a>
					</span>
					<span>
						<a className={hoverEffect} href='#'>
							Корпоративные туры
						</a>
					</span>
				</div>
				<div className={styles.forTouristContentColumn}>
					<span>
						<a className={hoverEffect} href='#'>
							Kids Go Free
						</a>
					</span>
					<span>
						<a className={hoverEffect} href='#'>
							Советы для начинающих туристов
						</a>
					</span>
				</div>
				<div className={styles.forTouristContentColumn}>
					<span>
						<a className={hoverEffect} href='#'>
							Отели
						</a>
					</span>
					<span>
						<a className={hoverEffect} href='#'>
							Санатории
						</a>
					</span>
				</div>
				<div className={styles.forTouristContentColumn}>
					<span>
						<a className={hoverEffect} href='#'>
							Лагеря
						</a>
					</span>
					<span>
						<a className={hoverEffect} href='#'>
							Экскурсии
						</a>
					</span>
				</div>
			</div>
		</div>
	)
}

export default FourTourists
