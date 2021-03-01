import { schema } from 'normalizr'

const person = new schema.Entity('persons')
export const movieCredits = new schema.Entity('movie', { cast: [person], crew: [person] })
