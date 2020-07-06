import { getVoidDelta, getVoidDeltas } from './utils'

const single = ['11:23']
const double = ['11:23', '12:00']
const triple = ['11:23', '12:00', '12:45']
const quadruple = ['11:23', '12:00', '12:45', '16:20']

describe('getVoidDelta', () => {
  it('should return the difference between two void events in minutes', () => {
    const result = getVoidDelta(...double)
  
    expect(result).toBe(37)
  })
})

describe('getVoidDeltas', () => {
  it('should return [] and avg 0 if voids length <= 1', () => {
    const emptyResult = getVoidDeltas([])
    const singleResult = getVoidDeltas(single)
  
    expect(emptyResult.deltas).toEqual([])
    expect(emptyResult.average).toBe(0)

    expect(singleResult.deltas).toEqual([])
    expect(singleResult.average).toBe(0)
  })

  it('should return delta & avg for voids of length 2', () => {
    const { deltas, average } = getVoidDeltas(double)
  
    expect(deltas).toEqual([37])
    expect(average).toEqual(37)
  })
  
  it('should return delta for voids of length 3', () => {
    const { deltas } = getVoidDeltas(triple)
  
    expect(deltas).toEqual([37, 45])
  })

  it('should return avg delta for voids of length 3', () => {
    const { average } = getVoidDeltas(triple)
  
    expect(average).toEqual(41)
  })

  it('should return delta for voids of length 4', () => {
    const { deltas } = getVoidDeltas(quadruple)

    expect(deltas).toEqual([37, 45, 215])
  })

  it('should return avg delta for voids of length 4', () => {
    const { average } = getVoidDeltas(quadruple)
  
    expect(average).toEqual(99)
  })
})
