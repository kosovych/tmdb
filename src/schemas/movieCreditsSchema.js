import { schema } from 'normalizr'

const crewMember = new schema.Entity(
  'persons',
  {},
  {
    mergeStrategy: (entityA, entityB) => ({
      ...entityA,
      ...entityB,
      job: `${entityA.job} / ${entityB.job}`
    })
  }
)

const castMember = new schema.Entity(
  'persons',
  {},
  {
    mergeStrategy: (entityA, entityB) => ({
      ...entityA,
      ...entityB,
      character: `${entityA.job} / ${entityB.job}`
    })
  }
)

export const movieCredits = new schema.Entity(
  'movie',
  { cast: [castMember], crew: [crewMember] }
)
