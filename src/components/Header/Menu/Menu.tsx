import styles from './Menu.module.scss'
import { useAppSelector } from '../../../custom/hooks'
import { selectMenuStatus } from '../../../state/Slices/MainPageSlice/MainPageSlice'
import { FC } from 'react'

const Menu: FC = () => {
	const menuStatus = useAppSelector(selectMenuStatus)
	return (
		<div
			className={
				menuStatus
					? `${styles.headerMenuWrapper} ${styles.activeMenu} container`
					: `${styles.headerMenuWrapper} container`
			}
		>
			<div className={styles.mainMenu}>
				<h3 className={styles.mainMenuTitle}>Услуги</h3>
				<ul className={styles.ulMainMenu}>
					<li>
						<a className='hoverEffectLink' href='#'>
							1-3 дневные туры
						</a>
					</li>
					<li>
						<a className='hoverEffectLink' href='#'>
							Отели
						</a>
					</li>
					<li>
						<a className='hoverEffectLink' href='#'>
							Лагеря
						</a>
					</li>
					<li>
						<a className='hoverEffectLink' href='#'>
							Корпоративные туры
						</a>
					</li>
					<li>
						<a className='hoverEffectLink' href='#'>
							Санатории
						</a>
					</li>
					<li>
						<a className='hoverEffectLink' href='#'>
							Экскурсии
						</a>
					</li>
				</ul>
			</div>
			<div className={styles.infoPanel}>
				<h3 className={styles.infoPanelTitle}>Информационные страницы</h3>
				<ul className={styles.ulInfoPanel}>
					<li>
						<a className='hoverEffectLink' href='#'>
							О Нас
						</a>
					</li>
					<li>
						<a className='hoverEffectLink' href='#'>
							Kids Go Free
						</a>
					</li>
					<li>
						<a className='hoverEffectLink' href='#'>
							Сотрудничество
						</a>
					</li>
					<li>
						<a className='hoverEffectLink' href='#'>
							Советы для начинающих туристов{' '}
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Menu
