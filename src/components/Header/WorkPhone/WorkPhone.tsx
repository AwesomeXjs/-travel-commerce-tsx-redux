import { FaPhoneVolume } from 'react-icons/fa6'
import styles from './WorkPhone.module.scss'

const WorkPhone = () => {
	return (
		<div className={styles.workPhone}>
			<div className={styles.phoneIcon}>
				<FaPhoneVolume />
			</div>
			<div className={styles.contactContent}>
				<span>Работаем с 10:00 до 19:00</span>
				<a className={styles.contactLink} href='tel:+77007007700'>
					+7 (700) 700-77-00
				</a>
			</div>
		</div>
	)
}

export default WorkPhone
