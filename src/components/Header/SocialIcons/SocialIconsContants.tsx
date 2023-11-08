import { BsInstagram, BsTelegram, BsWhatsapp } from 'react-icons/bs'
import styles from './SocialIcons.module.scss'
import { FC, HTMLAttributes } from 'react'

export interface SocialIconsContantsProps
	extends HTMLAttributes<HTMLLinkElement> {}

const SocialIconsContants: FC<SocialIconsContantsProps> = ({ style }) => {
	return (
		<div className={styles.socialContacts}>
			<ul className={styles.socialWrapper}>
				<li title='Наш инстаграм!'>
					<a style={style} href='#'>
						<BsInstagram />
					</a>
				</li>
				<li title='Наш WhatsApp!'>
					<a style={style} href='#'>
						<BsWhatsapp />
					</a>
				</li>
				<li title='Наш телеграм!'>
					<a style={style} href='#'>
						<BsTelegram />
					</a>
				</li>
			</ul>
		</div>
	)
}

export default SocialIconsContants
