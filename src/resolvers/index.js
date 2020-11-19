import {pipeResolvers} from 'graphql-resolvers'
import authenticateUser from '../utils/auth'

import getHello from './Query/getHello'

import bookQuery from './Query/book'
import bookHistoryQuery from './Query/bookHistory'
import bookMutation from './Mutation/book'

import user from './Mutation/user'

export default {
  Query: {
    getHello,
    getBook: bookQuery.getBook,
    getAllBooks: bookQuery.getAllBooks,
    searchBookLikeName: bookQuery.searchBookLikeName,
    searchBookLikeAuthor: bookQuery.searchBookLikeAuthor,
    getBookHistory: pipeResolvers(authenticateUser, bookHistoryQuery.getBookHistory),
  },
  Mutation: {
    login: user.login,
    logout: pipeResolvers(authenticateUser, user.logout),
    createBook: pipeResolvers(authenticateUser, bookMutation.createBook),
    updateBook: pipeResolvers(authenticateUser, bookMutation.updateBook),
    deleteBook: pipeResolvers(authenticateUser, bookMutation.deleteBook),
  },
}
