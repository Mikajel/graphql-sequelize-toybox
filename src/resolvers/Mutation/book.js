import Book from '../../database/models/book'

const createBook = async (_, {input: {name, year, rating, genre, author}}, __) => {
  const result = await Book.create(
    {
      name,
      rating,
      year,
      genreUuid: genre,
      authorUuid: author
    }
  )
  return !!result
}

const updateBook = async (_, {input: {uuid, name, rating, year, genre, author}}, __) => {
  const result = await Book.update(
    {
      name,
      year,
      rating,
      genreUuid: genre,
      authorUuid: author
    },
    {
      where: {uuid: uuid},
      individualHooks: true
    }
  )
  return !!result
}

const deleteBook = async (_, {input: {uuid}}, __) => {
  const result = await Book.destroy({
    where: {uuid: uuid},
    individualHooks: true
  })
  return !!result
}

export default {
  updateBook,
  createBook,
  deleteBook
}
