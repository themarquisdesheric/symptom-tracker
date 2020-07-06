import { writable } from 'svelte/store'
import initialState from './initialState'
import { sortVoids, checkForDuplicates } from '../utils'

const createEntryStore = () => {
	const { subscribe, update } = writable(initialState);

	return {
    subscribe,
    addVoid: (type, value) =>
      update(pastEntry => {
        value = checkForDuplicates(pastEntry.voids[type], value)

        return {
          ...pastEntry,
          voids: {
            ...pastEntry.voids,
            [type]: [
                ...pastEntry.voids[type],
                value
              ].sort(sortVoids),
            lastValue: value
          },
        }
      }),
    updateVoid: ({ type, value, oldValue }) =>
      update(pastEntry => {
        const index = pastEntry.voids[type].findIndex(v => v === oldValue)
        const newVoids = [...pastEntry.voids[type]]
        
        newVoids[index] = value

        return {
          ...pastEntry,
          voids: {
            ...pastEntry.voids,
            [type]: newVoids.sort(sortVoids),
            lastValue: value
          }
        }
      }),
    removeVoid: (type, value) =>
      update(pastEntry => ({
        ...pastEntry,
        voids: {
          ...pastEntry.voids,
          [type]: pastEntry.voids[type].filter(v => v !== value)
        },
      })),
    updateNocturia: (value) =>
      update(pastEntry => ({
        ...pastEntry,
        voids: {
          ...pastEntry.voids,
          nocturia: value,
        },
      })),
    toggleCheckbox: category => type =>
      update(pastEntry => ({
        ...pastEntry,
        [category]: {
          ...pastEntry[category],
          [type]: !pastEntry[category][type]
        },
      })),
    updateTimeOfDay: ({ category, type, value }) =>
      update(pastEntry => ({
        ...pastEntry,
        [category]: {
          ...pastEntry[category],
          [type]: value,
        }
      })),
    updateSymptom: (type, value) =>
      update(pastEntry => ({
        ...pastEntry,
        symptoms: {
          ...pastEntry.symptoms,
          [type]: value
        }
      })),
    updateNotes: notes =>
      update(pastEntry => ({
        ...pastEntry,
        notes,
      }))
	}
}

export default createEntryStore()
