import { writable } from 'svelte/store'
import initialState from './initialState'
import { TIMES, arbitrarySort } from '../utils'

const createEntryStore = () => {
	const { subscribe, update } = writable(initialState);

	return {
    subscribe,
    addVoid: (type, value) =>
      update(pastEntry => ({
        ...pastEntry,
        voids: {
          ...pastEntry.voids,
          [type]: type === 'nocturia' 
            ? value
            : [...pastEntry.voids[type], Date.now()]
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
    updateSelect: ({ category, type, value }) =>
      update(pastEntry => {
        if (value === 'all day') {
          return {
            ...pastEntry,
          [category]: {
              ...pastEntry[category],
              [type]: [...TIMES]
            },
          }
        }
        
        return {
          ...pastEntry,
          [category]: {
            ...pastEntry[category],
            [type]: [
              ...pastEntry[category][type],
              value
            ].sort(arbitrarySort),
          }
        }
      }),
    removeTimeOfDayTag: ({ category, type, value }) =>
      update(pastEntry => ({
        ...pastEntry,
        [category]: {
          ...pastEntry[category],
          [type]: pastEntry[category][type].filter(v => v !== value)
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
