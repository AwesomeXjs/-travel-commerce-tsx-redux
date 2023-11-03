import { FC, HTMLAttributes, ReactNode } from 'react'
import styles from './CustomButton.module.scss'

export interface CustomButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	type?: string
	variant:
		| 'green'
		| 'backWhiteBorderGreen'
		| 'orange'
		| 'backWhiteBorderBlue'
		| 'accentBlueButton'
	onClick?: (e: any) => void
}

const CustomButton: FC<CustomButtonProps> = ({ ...props }) => {
	const { variant, children, onClick, style } = props

	let buttonStyle
	switch (variant) {
		case 'green':
			buttonStyle = `${styles.custonButtonStyle} ${styles.variantGreen}`
			break
		case 'backWhiteBorderGreen':
			buttonStyle = `${styles.custonButtonStyle} ${styles.backWhiteBorderGreen}`
			break
		case 'orange':
			buttonStyle = `${styles.custonButtonStyle} ${styles.variantOrange}`
			break
		case 'backWhiteBorderBlue':
			buttonStyle = `${styles.custonButtonStyle} ${styles.backWhiteBorderBlue}`
			break
		case 'accentBlueButton':
			buttonStyle = `${styles.custonButtonStyle} ${styles.backWhiteBorderBlue}`
			break
		default:
			break
	}
	return (
		<button style={style} onClick={onClick} className={buttonStyle}>
			{children}
		</button>
	)
}

export default CustomButton
