import { blockContent } from './schemaTypes/blockContent'
import { category } from './schemaTypes/category'
import { post } from './schemaTypes/post'
import { author } from './schemaTypes/author'
import { menuImages } from './schemaTypes/menu'

export const schema = {
  types: [post, author, category, menuImages, blockContent],
}
