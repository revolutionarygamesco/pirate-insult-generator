import { adjectives, clean, vulgar } from '../ids'
import rollTable from './roll-table'
import generateInsult from './insult'

jest.mock('./roll-table')
const mockRollTable = rollTable as jest.MockedFunction<typeof rollTable>

describe('generateInsult', () => {
  beforeEach(() => {
    mockRollTable.mockClear()
    mockRollTable.mockImplementation(async (id: string) => {
      switch (id) {
        case adjectives: return { name: 'scurvy' }
        case clean: return { name: 'landlubber' }
        case vulgar: return { name: 'bastard' }
        default: return { name: 'nope' }
      }
    })
  })

  it.each([
    ['clean', undefined, 'scurvy landlubber'],
    ['clean', 'PG13', 'scurvy landlubber'],
    ['vulgar', 'R', 'scurvy bastard']
  ] as [string, string | undefined, string][])('rolls on the %s table when rating is %s', async (_desc, rating, expected) => {
    expect(await generateInsult(rating)).toBe(expected)
  })
})
