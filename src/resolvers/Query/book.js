import Book from '../../database/models/book'
import Author from '../../database/models/author'
import Genre from '../../database/models/genre'
const {Op} = require('sequelize')

// TODO: missing FIND LIKE author/name

const getBook = async (_, {input: {uuid}}, __) => {
  const result = await Book.findByPk(
    uuid,
    {
      attributes: ['uuid', 'name', 'rating', 'year'],
      include: [Author, Genre]
    }
  )

  if (!result) {
    throw new Error('Entry not found')
  }

  result.author = result.author.name
  result.genre = result?.genre?.name

  return result
}

const getAllBooks = async (_, {input: {amount, page}}, ___) => {
  const result = await Book.findAndCountAll(
    {
      order: [
        ['createdAt', 'ASC']
      ],
      limit: amount,
      offset: (page - 1) * amount,
      attributes: ['uuid', 'name', 'rating', 'year'],
      include: [Author, Genre]
    }
  )
  result.rows.forEach(book => {
    book.author = book?.author?.name
    book.genre = book?.genre?.name
  })

  return {
    books: result.rows,
    pageCount: Math.ceil(result.count / amount),
    amount,
    page,
  }
}

const searchBookLikeName = async (_, {input: {searchString, pagination: {amount, page}}}, __) => {
  const result = await Book.findAndCountAll({
    include: [Author],
    limit: amount,
    offset: (page - 1) * amount,
    where: {
      name: {
        [Op.substring]: `${searchString}`
      }
    }
  })

  result.rows.forEach(book => {
    book.author = book?.author?.name
    book.genre = book?.genre?.name
  })

  return {
    books: result.rows,
    pageCount: Math.ceil(result.count / amount),
    amount,
    page,
  }
}

const searchBookLikeAuthor = async (_, {input: {searchString, pagination: {amount, page}}}, __) => {
  const result = await Book.findAndCountAll({
    include: [{
      model: Author,
      where: {
        name: {
          [Op.substring]: `${searchString}`
        }
      }
    }],
    limit: amount,
    offset: (page - 1) * amount,
  })

  result.rows.forEach(book => {
    book.author = book?.author?.name
    book.genre = book?.genre?.name
  })

  return {
    books: result.rows,
    pageCount: Math.ceil(result.count / amount),
    amount,
    page,
  }
}

export default {
  getBook,
  getAllBooks,
  searchBookLikeAuthor,
  searchBookLikeName,
}
