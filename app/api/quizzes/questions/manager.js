const { Question } = require('../../../models')

function filterQuestion(id) {
  return Question.get().filter((q) => parseInt(q.quizId, 10) === parseInt(id, 10))
}

module.exports = { filterQuestion }
