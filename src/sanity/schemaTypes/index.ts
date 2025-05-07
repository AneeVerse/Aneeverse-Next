import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {faqType} from './faqType'

export const schemaTypes = [
  blockContentType, 
  categoryType, 
  postType, 
  authorType,
  faqType
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
