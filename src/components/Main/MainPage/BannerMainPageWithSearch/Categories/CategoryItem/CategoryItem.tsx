import { FC } from 'react'
import { useAppDispatch } from '../../../../../../custom/hooks'
import { setDataStatus } from '../../../../../../state/Slices/MainPageSlice/MainPageSlice'
import styles from './CategoryItem.module.scss'

interface CategoryItemProps {
	e: {
		title: string
		type: string
		Element: JSX.Element
	}
	dataStatus: string
}

const CategoryItem: FC<CategoryItemProps> = ({ e, dataStatus }) => {
	const dispatch = useAppDispatch()
	return (
		<div
			onClick={() => dispatch(setDataStatus(e.type))}
			className={
				dataStatus === `${e.type}`
					? `${styles.categoryItem} ${styles.active}`
					: styles.categoryItem
			}
		>
			{e.Element}
			<span>{e.title}</span>
		</div>
	)
}

export default CategoryItem
