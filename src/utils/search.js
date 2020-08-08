// basic search, will not be doing this client side soon
export const filterEntries = (entries, searchTerm) => {
  switch(searchTerm) {
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
      
    default:
      return Object.keys(entries).map(key => entries[key])
  }
}
