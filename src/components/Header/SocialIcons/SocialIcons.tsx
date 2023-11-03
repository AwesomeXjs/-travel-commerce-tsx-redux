import { FC } from 'react'
import { BsInstagram, BsTelegram, BsWhatsapp } from 'react-icons/bs'
import styles from './SocialIcons.module.scss'
import GlobalSearch from '../GlobalSearch/GlobalSearch'
import { SocialIconsAndSearchProps } from './SocialIconsTypes'

const SocialIconsAndSearch: FC<SocialIconsAndSearchProps> = props => {
	return (
		<div className={styles.searchContactsWrapper}>
			<GlobalSearch {...props} />
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
	)
}

export default SocialIconsAndSearch
