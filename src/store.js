import { writable } from 'svelte/store';

const createEntry = () => {
	const entry = writable({
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
    subscribe: entry.subscribe,
    addVoid: (type, value) =>
      entry.update(pastEntry => ({
        ...pastEntry,
        voids: {
          ...pastEntry.voids,
          [type]: type === 'nocturia' 
            ? value
            : [...pastEntry.voids[type], Date.now()]
        },
      })),
    toggleField: field => type =>
      entry.update(pastEntry => ({
        ...pastEntry,
        [field]: {
          ...pastEntry[field],
          [type]: !pastEntry[field][type]
        },
      })),
	};
}

export default createEntry();
