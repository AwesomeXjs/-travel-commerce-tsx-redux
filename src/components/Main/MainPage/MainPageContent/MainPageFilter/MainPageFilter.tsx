import styles from './MainPageFilter.module.scss'
import { makeStyles } from '@material-ui/core/styles'

import Slider from '@material-ui/core/Slider'

import MyOrder from './MyOrder/MyOrder'

import { useState } from 'react'
const useStyles = makeStyles({
	root: {
		width: 300,
		color: '#4E9F07',
	},
})

function valuetext(value: number) {
	return `${value}°C`
}

const MainPageFilter = () => {
	const classes = useStyles()

	const [value, setValue] = useState<number[]>([20, 37])
	const handleChange = (event: any, newValue: number | number[]) => {
		setValue(newValue as number[])
	}

	return (
		<div className={styles.mainPageFilterWrapper}>
			<MyOrder />
			<div className={styles.priceFilter}>
				<h3 className={styles.priceFilterTitle}>Цена</h3>
				<div className={classes.root}>
					<Slider
						value={value}
						onChange={handleChange}
						valueLabelDisplay='auto'
						aria-labelledby='range-slider'
						getAriaValueText={valuetext}
						min={0}
						max={10000}
					/>
				</div>
				<div className={styles.priceFilterResult}>
					<div className={styles.priceFilterResultItem}>
						<span>от</span>
						<div>{value[0]}</div>
					</div>
					<div className={styles.priceFilterResultItem}>
						<span>от</span>
						<div>{value[1]}</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainPageFilter
