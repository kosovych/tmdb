import { schema } from 'normalizr'
import camelcaseKeys from 'camelcase-keys'

const crewMember = new schema.Entity(
  'persons',
  {},
  {
    mergeStrategy: (entityA, entityB) => ({
      ...entityA,
      ...entityB,
      job: [entityA.job, entityB.job].filter(job => job).join(' / ')
    }),
    processStrategy: entity => camelcaseKeys(entity)
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
    }),
    processStrategy: entity => camelcaseKeys(entity)
  }
)

export const movieCredits = new schema.Entity(
  'movie',
  { cast: [castMember], crew: [crewMember] }
)
