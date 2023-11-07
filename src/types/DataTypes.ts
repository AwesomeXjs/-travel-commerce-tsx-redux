export type initialSlidesType = string[]

export type HotelType = {
	title: string
	discription: string
	moreDescription: string
	location: {
		place: string
		country: string
	}

	pricePerPerson: number
	pricePerPersonChildren: number
	discount: number
	additional: {
		pool: boolean
		animators: boolean
		training: boolean
		powerForCars: boolean
	}

	eat: {
		allIncludesEat: boolean
		breakfast: boolean
		dinnerAndBreakfast: boolean
		thirdEat: boolean
		withoutEat: boolean
		eatPrice: number
		eatPriceForChildren: number
	}
	place: string
	rating: number
	rooms: [
		{
			title: string
			description: string
			howMuchRooms: number
			howMuchPeoples: number
			anothersSpots: number
			size: number
			bathroom: {
				status: boolean
				bathroomComfort: string
			}
			toilet: boolean
			balcony: boolean
			miniBar: boolean
			smoking: boolean
			comfort: string
		}
	]
	ps: string
	image: any
	eatIcon: any
}
