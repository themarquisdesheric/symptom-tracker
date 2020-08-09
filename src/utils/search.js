const filter = ({ entries, type, category = 'pain' }) =>
  Object.keys(entries).reduce((acc, key) =>
    entries[key][category][type].length
      ? [...acc, entries[key]]
      : acc    
  , [])

// basic search, will not be doing this client side soon
export const filterEntries = (entries, searchTerm) => {
  switch(searchTerm) {
    case 'head/neck':
      return filter({
        entries,
        type: 'headNeck'
      })
    case 'shoulders/arms':
      return filter({
        entries,
        type: 'shouldersArms'
      })
    case 'hips/low back':
      return filter({
        entries,
        type: 'hipsLowBack'
      })
    case 'pelvis/bladder':
      return filter({
        entries,
        type: 'pelvisBladder'
      })
    case 'sciatica/legs':
      return filter({
        entries,
        type: 'sciaticaLegs'
      })
    case 'bowel/rectum':
      return filter({
        entries,
        type: 'bowelRectum'
      })
    case 'vulva/perineum':
      return filter({
        entries,
        type: 'vulvaPerineum'
      })
    case 'vision loss':
      return filter({
        entries,
        type: 'visionLoss', 
        category: 'symptoms'
      })
    case 'flare':
      return Object.keys(entries).reduce((acc, key) =>
        entries[key].symptoms.flare
          ? [...acc, entries[key]]
          : acc    
      , [])
    case 'headache':
      return Object.keys(entries).reduce((acc, key) => {
        const { headache } = entries[key].symptoms
        
        return headache && headache < 3 
          ? [...acc, entries[key]]
          : acc
      }, [])
    case 'migraine':
      return Object.keys(entries).reduce((acc, key) => {
        const { headache } = entries[key].symptoms
        
        return headache && headache >= 3 
          ? [...acc, entries[key]]
          : acc
      }, [])      
    default:
      return []
  }
}
