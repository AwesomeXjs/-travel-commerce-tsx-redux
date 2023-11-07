import { HotelType } from '../../types/DataTypes'
import hotelImage from '../../assets/hotelImageMainPage.png'
import eatIcon from '../../assets/eatIcon.png'

export const hotelsData: HotelType[] = [
	{
		title: 'Отель Каравансарай',
		discription:
			'Lorem ipsum dolor sit amet, id dicant splendide cum. Loremipsum dolor sit amet, id dicant splendide cum. Lorem ipsumdolor sit amet, id dicant splendide cum. Lorem ipsum dolorsit amet, id dicant splendide cum.',
		moreDescription:
			'Отель предоставляет гостям номера с кондиционером, письменным столом, чайником, сейфом, телевизором и собственной ванной комнатой с душем. Во всех номерах отеля «Казахстан Экспресс» имеется постельное белье и полотенца.Каждое утро в отеле сервируется завтрак «шведский стол», континентальный или американский завтрак.В отеле есть парикмахерская и бизнес-центр.Рядом с отелем находятся такие популярные достопримечательности, как парк Гвардейцев-Панфиловцев, Вознесенский собор и Монумент независимости Казахстана. Расстояние от отеля «Казахстан Экспресс» до ближайшего международного аэропорта Алматы составляет 15 км.Парам особенно нравится расположение — они оценили его на 9,5 за поездку вдвоем',
		location: {
			place: 'Алматинская область',
			country: 'Казахстан',
		},

		pricePerPerson: 10000,
		pricePerPersonChildren: 5000,
		discount: 0,
		additional: {
			pool: false,
			animators: false,
			training: true,
			powerForCars: true,
		},

		eat: {
			allIncludesEat: false,
			breakfast: false,
			dinnerAndBreakfast: false,
			thirdEat: false,
			withoutEat: true,
			eatPrice: 5000,
			eatPriceForChildren: 3000,
		},
		place: 'hotel',
		rating: 3.5,
		rooms: [
			{
				title: 'Люкс 4-х местный',
				description:
					'Просторный номер люкс класса для 4 человек. Стильный современный дизайн, большие окна с видом на город. ',
				howMuchRooms: 1,
				howMuchPeoples: 4,
				anothersSpots: 1,
				size: 40,
				bathroom: {
					status: true,
					bathroomComfort:
						'Полотенца, халаты, тапочки, фен, расчески, шампунь, гель для душа',
				},
				toilet: true,
				balcony: true,
				miniBar: true,
				smoking: false,
				comfort: 'Кондиционер, диван, комод, лампы, мини-холодильник',
			},
		],
		ps: 'Дополнительные примечания. Отображать только если они есть',
		image: hotelImage,
		eatIcon,
	},
	{
		title: 'Отель Каравансарай',
		discription:
			'Lorem ipsum dolor sit amet, id dicant splendide cum. Loremipsum dolor sit amet, id dicant splendide cum. Lorem ipsumdolor sit amet, id dicant splendide cum. Lorem ipsum dolorsit amet, id dicant splendide cum.',
		moreDescription:
			'Отель предоставляет гостям номера с кондиционером, письменным столом, чайником, сейфом, телевизором и собственной ванной комнатой с душем. Во всех номерах отеля «Казахстан Экспресс» имеется постельное белье и полотенца.Каждое утро в отеле сервируется завтрак «шведский стол», континентальный или американский завтрак.В отеле есть парикмахерская и бизнес-центр.Рядом с отелем находятся такие популярные достопримечательности, как парк Гвардейцев-Панфиловцев, Вознесенский собор и Монумент независимости Казахстана. Расстояние от отеля «Казахстан Экспресс» до ближайшего международного аэропорта Алматы составляет 15 км.Парам особенно нравится расположение — они оценили его на 9,5 за поездку вдвоем',
		location: {
			place: 'Алматинская область',
			country: 'Казахстан',
		},

		pricePerPerson: 10000,
		pricePerPersonChildren: 5000,
		discount: 23,
		additional: {
			pool: true,
			animators: true,
			training: false,
			powerForCars: false,
		},

		eat: {
			allIncludesEat: false,
			breakfast: true,
			dinnerAndBreakfast: false,
			thirdEat: false,
			withoutEat: false,
			eatPrice: 5000,
			eatPriceForChildren: 3000,
		},
		place: 'hotel',
		rating: 4.5,
		rooms: [
			{
				title: 'Люкс 4-х местный',
				description:
					'Просторный номер люкс класса для 4 человек. Стильный современный дизайн, большие окна с видом на город. ',
				howMuchRooms: 1,
				howMuchPeoples: 4,
				anothersSpots: 1,
				size: 40,
				bathroom: {
					status: true,
					bathroomComfort:
						'Полотенца, халаты, тапочки, фен, расчески, шампунь, гель для душа',
				},
				toilet: true,
				balcony: true,
				miniBar: true,
				smoking: false,
				comfort: 'Кондиционер, диван, комод, лампы, мини-холодильник',
			},
		],
		ps: 'Дополнительные примечания. Отображать только если они есть',
		image: hotelImage,
		eatIcon,
	},
	{
		title: 'Отель Каравансарай',
		discription:
			'Lorem ipsum dolor sit amet, id dicant splendide cum. Loremipsum dolor sit amet, id dicant splendide cum. Lorem ipsumdolor sit amet, id dicant splendide cum. Lorem ipsum dolorsit amet, id dicant splendide cum.',
		moreDescription:
			'Отель предоставляет гостям номера с кондиционером, письменным столом, чайником, сейфом, телевизором и собственной ванной комнатой с душем. Во всех номерах отеля «Казахстан Экспресс» имеется постельное белье и полотенца.Каждое утро в отеле сервируется завтрак «шведский стол», континентальный или американский завтрак.В отеле есть парикмахерская и бизнес-центр.Рядом с отелем находятся такие популярные достопримечательности, как парк Гвардейцев-Панфиловцев, Вознесенский собор и Монумент независимости Казахстана. Расстояние от отеля «Казахстан Экспресс» до ближайшего международного аэропорта Алматы составляет 15 км.Парам особенно нравится расположение — они оценили его на 9,5 за поездку вдвоем',
		location: {
			place: 'Алматинская область',
			country: 'Казахстан',
		},

		pricePerPerson: 10000,
		pricePerPersonChildren: 5000,
		discount: 23,
		additional: {
			pool: true,
			animators: true,
			training: false,
			powerForCars: false,
		},

		eat: {
			allIncludesEat: false,
			breakfast: true,
			dinnerAndBreakfast: false,
			thirdEat: false,
			withoutEat: false,
			eatPrice: 5000,
			eatPriceForChildren: 3000,
		},
		place: 'hotel',
		rating: 4.5,
		rooms: [
			{
				title: 'Люкс 4-х местный',
				description:
					'Просторный номер люкс класса для 4 человек. Стильный современный дизайн, большие окна с видом на город. ',
				howMuchRooms: 1,
				howMuchPeoples: 4,
				anothersSpots: 1,
				size: 40,
				bathroom: {
					status: true,
					bathroomComfort:
						'Полотенца, халаты, тапочки, фен, расчески, шампунь, гель для душа',
				},
				toilet: true,
				balcony: true,
				miniBar: true,
				smoking: false,
				comfort: 'Кондиционер, диван, комод, лампы, мини-холодильник',
			},
		],
		ps: 'Дополнительные примечания. Отображать только если они есть',
		image: hotelImage,
		eatIcon,
	},
	{
		title: 'Отель Каравансарай',
		discription:
			'Lorem ipsum dolor sit amet, id dicant splendide cum. Loremipsum dolor sit amet, id dicant splendide cum. Lorem ipsumdolor sit amet, id dicant splendide cum. Lorem ipsum dolorsit amet, id dicant splendide cum.',
		moreDescription:
			'Отель предоставляет гостям номера с кондиционером, письменным столом, чайником, сейфом, телевизором и собственной ванной комнатой с душем. Во всех номерах отеля «Казахстан Экспресс» имеется постельное белье и полотенца.Каждое утро в отеле сервируется завтрак «шведский стол», континентальный или американский завтрак.В отеле есть парикмахерская и бизнес-центр.Рядом с отелем находятся такие популярные достопримечательности, как парк Гвардейцев-Панфиловцев, Вознесенский собор и Монумент независимости Казахстана. Расстояние от отеля «Казахстан Экспресс» до ближайшего международного аэропорта Алматы составляет 15 км.Парам особенно нравится расположение — они оценили его на 9,5 за поездку вдвоем',
		location: {
			place: 'Алматинская область',
			country: 'Казахстан',
		},

		pricePerPerson: 10000,
		pricePerPersonChildren: 5000,
		discount: 23,
		additional: {
			pool: true,
			animators: true,
			training: false,
			powerForCars: false,
		},

		eat: {
			allIncludesEat: false,
			breakfast: true,
			dinnerAndBreakfast: false,
			thirdEat: false,
			withoutEat: false,
			eatPrice: 5000,
			eatPriceForChildren: 3000,
		},
		place: 'hotel',
		rating: 4.5,
		rooms: [
			{
				title: 'Люкс 4-х местный',
				description:
					'Просторный номер люкс класса для 4 человек. Стильный современный дизайн, большие окна с видом на город. ',
				howMuchRooms: 1,
				howMuchPeoples: 4,
				anothersSpots: 1,
				size: 40,
				bathroom: {
					status: true,
					bathroomComfort:
						'Полотенца, халаты, тапочки, фен, расчески, шампунь, гель для душа',
				},
				toilet: true,
				balcony: true,
				miniBar: true,
				smoking: false,
				comfort: 'Кондиционер, диван, комод, лампы, мини-холодильник',
			},
		],
		ps: 'Дополнительные примечания. Отображать только если они есть',
		image: hotelImage,
		eatIcon,
	},
]
