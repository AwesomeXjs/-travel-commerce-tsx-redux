import { FC, useEffect, useRef } from 'react'
import styles from './WhoChanger.module.scss'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineUser } from 'react-icons/ai'
import {
	setBackgroundOpacity,
	setWho,
	setWhoChildren,
	setWhoWindowOpen,
} from '../../../../../state/Slices/MainPageSlice/MainPageSlice'
import CustomButton from '../../../../../custom/UI/CustomButton/CustomButton'
import { useAppDispatch } from '../../../../../custom/hooks'

export interface WhoChangerProps {
	dataWho: number
	dataWhoChildren: number
	dataWhoOpenWindow: boolean
	backgroundOpacity: boolean
}

const WhoChanger: FC<WhoChangerProps> = ({
	dataWho,
	dataWhoChildren,
	dataWhoOpenWindow,
	backgroundOpacity,
}) => {
	const dispatch = useAppDispatch()
	//hide whoWindow on click
	const refHideWho = useRef(null)
	const hideClickOutsideWhoWindow = (e: any) => {
		// @ts-ignore
		if (refHideWho.current && !refHideWho.current.contains(e.target)) {
			dispatch(setWhoWindowOpen(false))
		}
	}
	useEffect(() => {
		document.addEventListener('click', hideClickOutsideWhoWindow, true)
	}, [])
	return (
		<div
			className={
				dataWhoOpenWindow
					? `${styles.mainWho} ${styles.activeBackground}`
					: styles.mainWho
			}
		>
			<AiOutlineUser className={styles.icon} />
			<div className={styles.whoContent}>
				<span>Кто?</span>
				<div
					onClick={() => {
						dispatch(setWhoWindowOpen(!dataWhoOpenWindow))
						dispatch(setBackgroundOpacity(true))
					}}
					className={styles.dataWhoQty}
				>
					<div>
						<span className={styles.mainQty}>{dataWho} взр</span>
						{!!dataWhoChildren && (
							<span className={styles.mainQty}>, {dataWhoChildren} дет.</span>
						)}
					</div>
					<div className={styles.mobileVersionDescr}>Добавить туриста</div>
				</div>
				<div ref={refHideWho}>
					{dataWhoOpenWindow && (
						<div className={styles.whoChanger}>
							<h3 className={styles.whoTitle}>Количество туристов</h3>
							<div className={styles.whoData}>
								<div className={styles.qtyOfOld}>
									<span className={styles.qtyTitle}>Взрослых</span>
									<div className={styles.changer}>
										<div
											onClick={() => {
												if (dataWho > 0) {
													dispatch(setWho(dataWho - 1))
												}
											}}
											className={styles.minus}
										>
											<AiOutlineMinus />
										</div>
										<div className={styles.quantity}>{dataWho}</div>
										<div
											onClick={() => {
												if (dataWho >= 0) {
													dispatch(setWho(dataWho + 1))
												}
											}}
											className={styles.plus}
										>
											<AiOutlinePlus />
										</div>
									</div>
								</div>
								{dataWhoChildren > 0 && (
									<div className={styles.qtyOfChildren}>
										<span className={styles.qtyTitle}>Детей</span>
										<div className={styles.changer}>
											<div
												onClick={() => {
													if (dataWhoChildren > 0) {
														dispatch(setWhoChildren(dataWhoChildren - 1))
													}
												}}
												className={styles.minus}
											>
												<AiOutlineMinus />
											</div>
											<div className={styles.quantity}>{dataWhoChildren}</div>
											<div
												onClick={() => {
													if (dataWhoChildren >= 0) {
														dispatch(setWhoChildren(dataWhoChildren + 1))
													}
												}}
												className={styles.plus}
											>
												<AiOutlinePlus />
											</div>
										</div>
									</div>
								)}
							</div>
							<CustomButton
								onClick={() => dispatch(setWhoChildren(dataWhoChildren + 1))}
								style={{ marginBottom: '12px' }}
								variant='backWhiteBorderGreen'
							>
								Добавить ребенка +
							</CustomButton>
							<CustomButton variant='green'>Сохранить</CustomButton>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default WhoChanger
