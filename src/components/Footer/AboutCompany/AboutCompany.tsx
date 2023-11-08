import { FC } from 'react'
import styles from './AboutCompany.module.scss'

export interface AboutCompanyProps {
	hoverEffect: string
}
const AboutCompany: FC<AboutCompanyProps> = ({ hoverEffect }) => {
	return (
		<div className={styles.company}>
			<h5 className={styles.companyTitle}>Компания</h5>
			<span>
				<a className={hoverEffect} href='#'>
					О нас
				</a>
			</span>
			<span>
				<a className={hoverEffect} href='#'>
					Сотрудничество
				</a>
			</span>
			<span>
				<a className={hoverEffect} href='#'>
					Политика конфиденциальности
				</a>
			</span>
		</div>
	)
}

export default AboutCompany
