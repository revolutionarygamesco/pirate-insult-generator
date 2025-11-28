import { cadj, vadj, cn, vn } from '../ids'
import rollTable from './roll-table'
import generateInsult from './insult'

jest.mock('./roll-table')
const mockRollTable = rollTable as jest.MockedFunction<typeof rollTable>

describe('generateInsult', () => {
  beforeEach(() => {
    mockRollTable.mockClear()
    mockRollTable.mockImplementation(async (id: string) => {
      switch (id) {
        case cadj: return { description: 'scurvy' }
        case vadj: return { description: 'syphilitic' }
        case cn: return { description: 'landlubber' }
        case vn: return { description: 'bastard' }
        default: return { description: 'nope' }
      }
    })
  })

  it.each([
    ['clean', undefined, 'scurvy landlubber'],
    ['clean', 'PG13', 'scurvy landlubber'],
    ['vulgar', 'R', 'syphilitic bastard']
  ] as [string, string | undefined, string][])('rolls on the %s tables when rating is %s', async (_desc, rating, expected) => {
    expect(await generateInsult(rating)).toBe(expected)
  })
})
