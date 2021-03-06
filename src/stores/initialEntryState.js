import { getTodaysDate } from '../utils/utils'

export default (date = getTodaysDate()) => ({
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
    bowelRectum: [],
    vulvaPerineum: [],
  },
  symptoms: {
    flare: false,
    itch: false,
    cramps: false,
    discharge: false,
    gait: false,
    fatigue: false,
    vertigo: false,
    sex: false,
    nausea: false,
    headache: 0,
    urgency: '',
    collar: [],
    visionLoss: [],
    subluxations: [],
  },
  mensesCycle: {
    day: 1,
    endPeriod: false,
  },
  medications: [],
  notes: '',
  date,
})
