import { writable } from 'svelte/store'
import { TIMES, arbitrarySort } from './utils'

const createEntryStore = () => {
	const { subscribe, update } = writable({
    voids: {
      pee: [],
      poo: [],
      nocturia: 0,
    },
    allergens: {
      dairy: false,
      gluten: false,
      sugar: false,
      soy: false,
    },
    pain: {
      headNeck: [],
      shouldersArms: [],
      hipsLowBack: [],
      pelvisBladder: [],
      sciaticaLegs: [],
      bowelsRectum: [],
      vulvaPerineum: [],
    },
    symptoms: {
      flare: false,
      itch: false,
      cramps: false,
      discharge: false,
      sex: false,
      fatigue: false,
      vertigo: false,
      gait: false,
      nausea: false,
      headache: 0,
      urgency: '',
      collar: [],
      visionLoss: [],
    },
    mensesCycle: {
      mensesCycle: 1,
      endPeriod: false,
    },
    medications: [],
    notes: '',
  });

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
      }))
	}
}

export default createEntryStore()
