import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import {faqType} from './faqType'
import {customerStoryType} from './customerStoryType'

export const schemaTypes = [
  blockContentType, 
  categoryType, 
  postType, 
  authorType,
  faqType,
  customerStoryType
]

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
