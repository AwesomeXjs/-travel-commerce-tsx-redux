import { FC } from 'react'
import styles from './MainPageContent.module.scss'
import MainPageFilter from './MainPageFilter/MainPageFilter'

interface MainPageContentProps {}

const MainPageContent: FC<MainPageContentProps> = () => {
	return (
		<div className={`${styles.mainPageContentWrapper} container`}>
			<MainPageFilter />
			<div className={styles.mainPageDataWrapper}>yoM</div>
		</div>
	)
}

export default MainPageContent
