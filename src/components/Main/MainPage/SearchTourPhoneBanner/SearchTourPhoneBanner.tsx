import { MouseEvent } from 'react'
import { InputMask } from 'primereact/inputmask'

import styles from './SearchTourPhoneBanner.module.scss'
import photoGirl from '../../../../assets/photoGirlTour.png'
import { useAppDispatch, useAppSelector } from '../../../../custom/hooks'
import {
	selectPhoneForApplication,
	setPhoneForApplication,
} from '../../../../state/Slices/MainPageSlice/MainPageSlice'

const SearchTourPhoneBanner = () => {
	const phoneValue = useAppSelector(selectPhoneForApplication)
	const dispatch = useAppDispatch()
	const submitPhoneFormHandler = (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		dispatch(setPhoneForApplication(''))
	}
	return (
		<div className={styles.wrapper}>
			<div className='container'>
				<div className={styles.content}>
					<div className={styles.leftSection}>
						<img src={photoGirl} alt='girl' />
						<h1>Хотите найти тур мечты?</h1>
					</div>
					<div className={styles.rightSection}>
						<form className={styles.formWrapper} action='submit'>
							<InputMask
								className={styles.phoneInput}
								value={phoneValue}
								onChange={e => dispatch(setPhoneForApplication(e.target.value))}
								mask='+7-(999)-99-99'
								placeholder='+7-(___)-__-___'
							/>
							<button
								className={styles.buttonWrapper}
								onClick={submitPhoneFormHandler}
								type='submit'
							>
								Заказать звонок
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SearchTourPhoneBanner
