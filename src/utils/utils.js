import { addMinutes, parse, format, differenceInMinutes } from 'date-fns'
import { push } from 'svelte-spa-router'
import { PAIN_TYPES } from './constants'

export const formatMonth = (month = new Date()) =>
  format(month, 'MMMM') 

export const getFormattedDate = (date = new Date()) =>
  format(date, 'MM/dd/y').split('/').join('-')

// format: 08-07-2020
export const getTodaysDate = () =>
  getFormattedDate()

// format: 2020-08-07
export const getToday = () =>
  format(new Date(), 'yyyy-MM-dd')

export const dehyphenate = (date) =>
  new Date(date.replace('-', '/'))

const today = getToday()

export const getVoidDelta = (void1, void2) => {
  const timestamp1 = new Date(`${today}T${void1}:00Z`)
  const timestamp2 = new Date(`${today}T${void2}:00Z`)

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

export const formatTimeTo12Hour = (timestamp) =>
  new Date(`${today}T${timestamp}:00Z`)
    .toLocaleTimeString(
      {},
      {
        timeZone: 'UTC',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric'
      }
    )

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

export const getPainSymptoms = (pain) =>
  Object.keys(pain).reduce(
    (acc, key) =>
      pain[key].length
        ? [...acc, PAIN_TYPES[key]]
        : acc
    , []
  )

export const isMonthDateMatch = (key, date) => {
  const month = date.slice(0, 2)
  const year = date.slice(3)

  if ((key.indexOf(month) === 0) && (key.indexOf(year) === 6)) {
    return true
  }

  return false
}

export const goToPastEntry = (date) => {
  // JS Date constructor quirkiness: hyphenated numbers result in off-by-one errors
  // this means 07-18 returns 7-17 so need to pass in slash separated values instead 
  const newDate = new Date(date.split('-').join('/'))

  push(`/entry/${getFormattedDate(newDate)}`)
}
