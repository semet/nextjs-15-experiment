import { flattenObject } from './object'

describe('flatten Object', () => {
  it('should flatten object', () => {
    const obj = {
      name: 'name',
      alias: 'alias',
      departmentId: {
        label: 'label',
        value: 'value'
      },
      another: {
        label: 'label',
        value: 'value2'
      }
    }
    const result = flattenObject(obj)
    expect(result).toEqual({
      name: 'name',
      alias: 'alias',
      departmentId: 'value',
      another: 'value2'
    })
  })
})
