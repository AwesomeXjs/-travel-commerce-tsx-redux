import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootType } from '../state/store'

export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
