import { FC } from 'react'
import { FaPhoneVolume } from 'react-icons/fa6'
import { BsInstagram, BsTelegram, BsWhatsapp } from 'react-icons/bs'

import styles from './Header.module.scss'
import Hamburger from './Hamburger/Hamburger'
import LanguageVariant from './LanguageVariant/LanguageVariant'
import logo from '../../assets/logo.png'

import GlobalSearch from './GlobalSearch/GlobalSearch'

const Header: FC = () => {
	return (
		<header className={`container`}>
			<div className={styles.headerWrapper}>
				<div className={styles.headerFirstSection}>
					<Hamburger />
					<LanguageVariant />
					<div className={styles.logo}>
						<a href='#'>
							<img src={logo} alt='logo' />
						</a>
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
				<div className={styles.searchContactsWrapper}>
					<GlobalSearch />
					<div className={styles.socialContacts}>
						<ul className={styles.socialWrapper}>
							<li title='Наш инстаграм!'>
								<a href='#'>
									<BsInstagram />
								</a>
							</li>
							<li title='Наш WhatsApp!'>
								<a href='#'>
									<BsWhatsapp />
								</a>
							</li>
							<li title='Наш телеграм!'>
								<a href='#'>
									<BsTelegram />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
