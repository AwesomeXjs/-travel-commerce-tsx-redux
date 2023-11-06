import { FC } from 'react'
import Slider from '@material-ui/core/Slider'

import styles from './PriceFilter.module.scss'
import { ClassNameMap } from '@material-ui/core/styles/withStyles'

export interface PriceFilterProps {
	valuetext: (value: number) => string
	value: number[]
	handleChange: (event: any, newValue: number | number[]) => void
	classes: ClassNameMap<'root'>
}

const PriceFilter: FC<PriceFilterProps> = ({
	valuetext,
	value,
	handleChange,
	classes,
}) => {
	return (
		<div className={styles.priceFilter}>
			<h3 className={'mainPageFilterTitles'}>Цена</h3>
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
					<span>до</span>
					<div>{value[1]}</div>
				</div>
			</div>
		</div>
	)
}

export default PriceFilter
