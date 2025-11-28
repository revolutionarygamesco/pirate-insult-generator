import { cadj, vadj, cn, vn } from '../ids.ts'
import rollTable from './roll-table.ts'

const getString = (result: RollTableResult | null, fallback: string): string => {
  if (result === null) return fallback
  return result.description ?? fallback
}

const generateInsult = async (rating: string = 'PG13'): Promise<string> => {
  const fallbacks = { adj: 'scabby', n: 'sea dog' }
  const nouns = rating === 'R' ? vn : cn
  const adjectives = rating === 'R' ? vadj : cadj

  const adj = await rollTable(adjectives, { displayChat: false })
  const n = await rollTable(nouns, { displayChat: false })
  return `${getString(adj, fallbacks.adj)} ${getString(n, fallbacks.n)}`
}

export default generateInsult
