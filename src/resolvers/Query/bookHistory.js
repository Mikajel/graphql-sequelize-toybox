import BookHistory from '../../database/models/bookHistory'
import Author from '../../database/models/author'

const getBookHistory = async (_, {input: {uuid}}, __) => {
  const result = await BookHistory.findAll(
    {
      where: {
        bookUuid: uuid
      },
      include: [Author],
      order: [
        ['validFrom', 'ASC']
      ]
    }
  )
  result.forEach(historyEntry => {
    historyEntry.author = historyEntry.author.name
  })
  return result
}

export default {
  getBookHistory
}
