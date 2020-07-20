import { writable } from 'svelte/store'
import mockEntriesState from './mockEntriesState'

const createEntriesStore = () => {
	const { subscribe, update } = writable(mockEntriesState);

	return {
    subscribe,
    saveEntry: (newEntry) =>
      update(pastEntries => ({
          ...pastEntries,
          [newEntry.date]: newEntry
      })),
  }
}

export default createEntriesStore()
