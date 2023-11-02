import { FC } from 'react'
import { FaPhoneVolume } from 'react-icons/fa6'
import { AiOutlineSearch } from 'react-icons/ai'

import styles from './Header.module.scss'
import Hamburger from './Hamburger/Hamburger'
import LanguageVariant from './LanguageVariant/LanguageVariant'
import logo from '../../assets/logo.png'
import logoMobile from '../../assets/logoMobile.png'
import SocialIcons from './SocialIcons/SocialIcons'
import Menu from './Menu/Menu'
import { useAppSelector } from '../../custom/hooks'
import { selectMenuStatus } from '../../state/Slices/MainPageSlice/MainPageSliceData'

const Header: FC = () => {
	const menuStatus = useAppSelector(selectMenuStatus)
	return (
		<header className={styles.mainHeader}>
			<div className={`${styles.headerWrapper} container`}>
				<div className={styles.headerFirstSection}>
					<Hamburger />
					<LanguageVariant />
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
				</div>
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
				<SocialIcons />
			</div>
			<hr className={styles.border} />
			{menuStatus && <Menu />}
			yo
		</header>
	)
}

export default Header
