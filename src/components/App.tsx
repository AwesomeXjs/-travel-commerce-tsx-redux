import { FC } from 'react'
import Header from './Header/Header'
import { useAppDispatch, useAppSelector } from '../custom/hooks'
import {
	selectMenuStatus,
	setMenuStatus,
} from '../state/Slices/MainPageSlice/MainPageSlice'
import Main from './Main/Main'

const App: FC = () => {
	const dispatch = useAppDispatch()
	const menuStatus = useAppSelector(selectMenuStatus)
	const changeMenuStatusHandler = () => {
		dispatch(setMenuStatus(false))
	}
	return (
		<div>
			<Header />
			<Main />

			{menuStatus && (
				<div
					onClick={changeMenuStatusHandler}
					className='modalBackground'
				></div>
			)}
		</div>
	)
}

export default App
