import { FC } from 'react'
import styles from './Header.module.scss'
import Hamburger from './Hamburger/Hamburger'
import LanguageVariant from './LanguageVariant/LanguageVariant'
import logo from '../../assets/logo.png'

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
				<div className={styles.workPhone}>yo</div>
				<div>
					<div className={styles.globalSearch}>yo</div>
					<div className={styles.socialContacts}></div>
				</div>
			</div>
		</header>
	)
}

export default Header
