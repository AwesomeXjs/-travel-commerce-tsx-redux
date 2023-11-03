import { AiOutlineSearch } from 'react-icons/ai'
import styles from './LogoAndMobileSearch.module.scss'
import logo from '../../../assets/logo.png'
import logoMobile from '../../../assets/logoMobile.png'

const LogoAndMobileSearch = () => {
	return (
		<>
			<div className={styles.logo}>
				<div className={styles.logoPc}>
					<img src={logo} alt='logo' />
				</div>
				<div className={styles.logoMobile}>
					<img src={logoMobile} alt='logo' />
				</div>
			</div>
			<div className={styles.mobileSearch}>
				<AiOutlineSearch className={styles.mobileSearchIcon} />
			</div>
		</>
	)
}

export default LogoAndMobileSearch
