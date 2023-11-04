import { FC } from 'react'

import styles from './Categories.module.scss'

import CategoryItem from './CategoryItem/CategoryItem'
import { arrayCategories } from './CategoryArray'

export interface CategoriesProps {
	dataStatus: string
}

const Categories: FC<CategoriesProps> = ({ dataStatus }) => {
	return (
		<div className={styles.categoriesPC}>
			{arrayCategories.map(e => {
				return <CategoryItem dataStatus={dataStatus} e={e} />
			})}
		</div>
	)
}

export default Categories
