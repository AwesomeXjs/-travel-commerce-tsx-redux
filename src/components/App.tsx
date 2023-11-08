import { FC } from 'react'
import Header from './Header/Header'
import { useAppDispatch, useAppSelector } from '../custom/hooks'
import {
	selectBackgroundOpacity,
	setBackgroundOpacity,
	setMenuStatus,
} from '../state/Slices/MainPageSlice/MainPageSlice'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const App: FC = () => {
	const dispatch = useAppDispatch()
	const backGroundVisible = useAppSelector(selectBackgroundOpacity)
	const changeMenuStatusHandler = () => {
		dispatch(setMenuStatus(false))
		dispatch(setBackgroundOpacity(false))
	}
	return (
		<>
			<Header />
			<Main />
			<Footer />
			{backGroundVisible && (
				<div
					onClick={changeMenuStatusHandler}
					className='modalBackground'
				></div>
			)}
		</>
	)
}

export default App
