import { addMinutes, parse, format, differenceInMinutes } from 'date-fns'

export const formatMonth = (month = new Date()) =>
  format(month, 'MMMM') 

export const getFormattedDate = (date = new Date()) =>
  format(date, 'MM/dd/y').split('/').join('-')

export const getTodaysDate = () =>
  getFormattedDate()

export const getVoidDelta = (void1, void2) => {
  const date = format(new Date(), 'yyyy-MM-dd')
  const timestamp1 = new Date(`${date}T${void1}:00Z`)
  const timestamp2 = new Date(`${date}T${void2}:00Z`)

  return differenceInMinutes(timestamp2, timestamp1)
}

export const getVoidDeltas = (voids) => {
  const deltas = []
  let differenceTotal = 0

  if (voids.length <= 1) {
    return {
      deltas,
      average: 0
    }
  }

  for (let i = 0; i < voids.length; i++) {
    const thisVoid = voids[i]
    const nextVoid = voids[i + 1]

    if (!nextVoid) {
      const average = Number(
        (differenceTotal / deltas.length).toFixed(1)
      )

      return {
        deltas,
        average,
      }
    }
    
    const difference = getVoidDelta(thisVoid, nextVoid)

    deltas.push(difference)
    differenceTotal += difference
  }
}

export const TIMES = ['morning', 'day', 'evening', 'night']

export const formatTimeTo12Hour = (timestamp) => {
  const date = format(new Date(), 'yyyy-MM-dd')
  
  return new Date(`${date}T${timestamp}:00Z`)
    .toLocaleTimeString(
      {},
      {
        timeZone: 'UTC',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric'
      }
    );
}

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

export const sortVoids = (a, b) => {
  const aHours = a.slice(0, 2)
  const bHours = b.slice(0, 2)
  const aMinutes = a.slice(3, 5)
  const bMinutes = b.slice(3, 5)

  return (aHours === bHours)
    ? aMinutes - bMinutes
    : aHours - bHours
}
