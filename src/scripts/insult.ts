import { adjectives, clean, vulgar } from '../ids.ts'
import rollTable from './roll-table.ts'

const generateInsult = async (rating: string = 'PG13'): Promise<string> => {
  const fallbacks = { adj: 'scabby', n: 'sea dog' }

  const adjective = await rollTable(adjectives)
  const noun = await rollTable(rating === 'R' ? vulgar : clean)

  const adj = adjective === null ? fallbacks.adj : adjective.name ?? fallbacks.adj
  const n = noun === null ? fallbacks.n : noun.name ?? fallbacks.n

  return `${adj} ${n}`
}

export default generateInsult
