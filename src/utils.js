import entry from './store'

export const TIMES = ['morning', 'day', 'evening', 'night']

export const arbitrarySort = (a, b) => {
  const arbitraryOrder = { morning: 1, day: 2, evening: 3, night: 4 }

  return arbitraryOrder[a] - arbitraryOrder[b]
}

export const removeTimeOfDayByCategory = category => (type, value) => {
  if (confirm(`Are you sure you want to remove ${value}?`)) {
    entry.removeTimeOfDayTag({
      category,
      type,
      value,
    })
  }
}
