import { writable } from 'svelte/store'

const createEntriesStore = () => {
	const { subscribe, update } = writable({});

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
