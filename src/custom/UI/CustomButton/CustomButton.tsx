import { FC, HTMLAttributes, ReactNode } from 'react'
import styles from './CustomButton.module.scss'

export interface CustomButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	type: string
}

const CustomButton: FC<CustomButtonProps> = ({ ...props }) => {
	return <button>{props.children}</button>
}

export default CustomButton
