import { Checkbox, CheckboxChangeEvent } from 'primereact/checkbox'
import styles from './CheckBoxMainPage.module.scss'
import { FC } from 'react'

export interface CheckBoxMainPageProps {
	checked: boolean
	onChange: (e: CheckboxChangeEvent) => void
	style?: any
}

const CheckBoxMainPage: FC<CheckBoxMainPageProps> = ({
	onChange,
	checked,
	style,
}) => {
	return (
		<Checkbox
			style={style}
			className={styles.checkBoxMainPageStyle}
			onChange={onChange}
			checked={checked}
		></Checkbox>
	)
}

export default CheckBoxMainPage
