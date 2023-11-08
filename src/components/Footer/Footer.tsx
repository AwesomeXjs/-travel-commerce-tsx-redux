import SocialIconsContants from '../Header/SocialIcons/SocialIconsContants'
import AboutCompany from './AboutCompany/AboutCompany'
import styles from './Footer.module.scss'
import FourTourists from './ForTourists/FourTourists'

const Footer = () => {
	return (
		<div className={styles.footerWrapper}>
			<div className={`${styles.footerContent} container`}>
				<FourTourists hoverEffect={styles.forTouristContentItem} />
				<AboutCompany hoverEffect={styles.forTouristContentItem} />
				<div className={styles.contacts}>
					<h5 className={styles.contactsTitle}>Контакты</h5>

					<span>
						<a className={styles.forTouristContentItem} href='#'>
							+7 738 747 77 44
						</a>
					</span>

					<span>
						<a className={styles.forTouristContentItem} href='#'>
							+7 738 747 77 44
						</a>
					</span>
					<SocialIconsContants
						style={{ backgroundColor: '#292D32', color: 'white' }}
					/>
				</div>
			</div>
		</div>
	)
}

export default Footer
