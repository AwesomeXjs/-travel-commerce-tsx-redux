//разница дат
export const dayDifference = (dates: string[]) => {
	const [date1, date2] = dates.map(dateString => new Date(dateString))
	//@ts-ignore
	return Math.floor((date2 - date1) / (1000 * 60 * 60 * 24))
}
