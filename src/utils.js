import { addMinutes, parse, format } from 'date-fns'

export const TIMES = ['morning', 'day', 'evening', 'night']

const addMinute = (timestamp) => {
  const dateWithMinuteAdded = addMinutes(parse(timestamp, 'kk:mm', new Date()), 1)
  
  return format(dateWithMinuteAdded,'kk:mm')
}

// recursively increment minute of void event in case of duplicates
// necessary because rapid entry of past events leads to duplicate starting values
export const checkForDuplicates = (voids, timestamp) =>
  voids.includes(timestamp)
    ? checkForDuplicates(voids, addMinute(timestamp))
    : timestamp

export const arbitrarySort = (a, b) => {
  const arbitraryOrder = { morning: 1, day: 2, evening: 3, night: 4 }

  return arbitraryOrder[a] - arbitraryOrder[b]
}

export const sortVoids = (a, b) => {
  const aHours = a.slice(0, 2)
  const bHours = b.slice(0, 2)
  const aMinutes = a.slice(3, 5)
  const bMinutes = b.slice(3, 5)

  return (aHours === bHours)
    ? aMinutes - bMinutes
    : aHours - bHours
}
