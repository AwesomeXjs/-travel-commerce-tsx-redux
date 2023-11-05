import { FC } from 'react'
import Header from './Header/Header'
import { useAppDispatch, useAppSelector } from '../custom/hooks'
import {
	selectBackgroundOpacity,
	selectWhereWindowOpen,
	setBackgroundOpacity,
	setMenuStatus,
} from '../state/Slices/MainPageSlice/MainPageSlice'
import Main from './Main/Main'

const App: FC = () => {
	const dispatch = useAppDispatch()

	const searchWhereStatus = useAppSelector(selectWhereWindowOpen)

	const backGroundVisible = useAppSelector(selectBackgroundOpacity)
	const changeMenuStatusHandler = () => {
		dispatch(setMenuStatus(false))
		dispatch(setBackgroundOpacity(false))
	}
	return (
		<>
			<Header />
			<Main />

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
