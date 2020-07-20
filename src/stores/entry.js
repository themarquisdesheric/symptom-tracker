import { writable } from 'svelte/store'
import initialState from './initialEntryState'
import { sortVoids, checkForDuplicates } from '../utils'

const createEntryStore = () => {
	const { subscribe, update, set } = writable(initialState);

	return {
    subscribe,
    set,
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
    updateSymptom: (type, value) =>
      update(pastEntry => ({
        ...pastEntry,
        symptoms: {
          ...pastEntry.symptoms,
          [type]: value
        }
      })),
    // add past medications/subluxations results for autocomplete from db
    addAutocomplete: category => value =>
      update(pastEntry => {
        if (
          category === 'medications' && 
          pastEntry[category].indexOf(value) === -1
        ) {
          return {
            ...pastEntry,
            [category]: [...pastEntry[category], value]
          }
        }
        
        if (
          category === 'symptoms' &&
          pastEntry[category].subluxations.indexOf(value) === -1
        ) {
          return {
            ...pastEntry,
            [category]: {
              ...pastEntry[category],
              subluxations: [...pastEntry[category].subluxations, value]
            }
          }
        }

        return pastEntry
      }),
    removeAutocomplete: (category, value) =>
      update(pastEntry =>
        (category === 'medications')
          ? {
            ...pastEntry,
            [category]: pastEntry[category].filter(v => v !== value)
          }
          : {
            ...pastEntry,
            [category]: {
              ...pastEntry[category],
              subluxations: pastEntry[category].subluxations.filter(v => v !== value)
            }
          }
      ),
    updateNotes: notes =>
      update(pastEntry => ({
        ...pastEntry,
        notes,
      }))
	}
}

export default createEntryStore()
