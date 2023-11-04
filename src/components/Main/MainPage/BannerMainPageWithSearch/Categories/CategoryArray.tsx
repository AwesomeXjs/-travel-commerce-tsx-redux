import { GiHotSurface } from 'react-icons/gi'
import {
	RiAlarmLine,
	RiHeartPulseFill,
	RiHotelLine,
	RiTreeLine,
} from 'react-icons/ri'
import { CategoriesType } from '../../../../../types/MainPageTypes'

export const arrayCategories: CategoriesType[] = [
	{
		title: 'Отели',
		type: 'hotels',
		Element: <RiHotelLine />,
	},
	{
		title: 'Санатории',
		type: 'sanatoriums',
		Element: <RiHeartPulseFill />,
	},
	{
		title: '1-3 дневные',
		type: 'fewDays',
		Element: <RiAlarmLine />,
	},
	{
		title: 'Лагеря',
		type: 'camps',
		Element: <RiTreeLine />,
	},
	{
		title: 'Горячие источники',
		type: 'hotSprings',
		Element: <GiHotSurface />,
	},
]
