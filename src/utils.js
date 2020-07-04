export const TIMES = ['morning', 'day', 'evening', 'night']

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
