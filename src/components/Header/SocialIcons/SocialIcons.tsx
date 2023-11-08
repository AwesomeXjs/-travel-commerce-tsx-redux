import { FC } from 'react'
import styles from './SocialIcons.module.scss'
import GlobalSearch from '../GlobalSearch/GlobalSearch'
import { SocialIconsAndSearchProps } from './SocialIconsTypes'
import SocialIconsContants from './SocialIconsContants'

const SocialIconsAndSearch: FC<SocialIconsAndSearchProps> = props => {
	return (
		<div className={styles.searchContactsWrapper}>
			<GlobalSearch {...props} />
			<SocialIconsContants />
		</div>
	)
}

export default SocialIconsAndSearch
