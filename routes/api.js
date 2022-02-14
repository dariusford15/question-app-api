var express = require('express');
var router = express.Router();
let models = require('../lib/models')
//RESTFUL API routes
/*
1)Create a question
POST http;//localhost:3000/api/questions
2)Fetch all the questions
GET http://localhost:3000/api/questions
3)Create an anwser to a question
POST http:/localhost:3000/api/questions/:questionId/answers
we will have access to :questionId using req.params.questionId
4)Get all the answers for a question
GET http://localhost:3000/api/questions/:questionId/answers */

// POST http://localhost:3000/api/questions
router.post('/questions', async function(req, res, next) {
    console.log('req.body are', req.body)
    console.log('req.query', req.query)
    let question = await models.Question.create({questionText: req.body.questionText, category: req.query.category})
    res.json(question)
});


// Get http://localhost:3000/api/questions
router.get('/questions', async function(req, res, next) {
    console.log('req.query', req.query)
    let questions = await models.Question.findAll({where: {category: req.query.category}})
    res.json(questions)
});

// POST http://localhost:3000/api/questions/:questionId/answers
router.post('/questions/:questionId/answers', async function(req, res, next) {
    console.log('req.body', req.body)
    console.log('req.params', req.params)
    let answers = await models.Answer.create({answerText: req.body.answerText, questionId: req.params.questionId})
    res.json(answers)
});
// Get http://localhost:3000/api/questions/:questionId/answers
router.get('/questions/:questionId/answers', async function(req, res, next) {
    console.log('req.body', req.body)
    console.log('req.params', req.params)
    let answers = await models.Answer.findAll({where: {questionId: req.params.questionId}})
    res.json(answers)
});
/* GET home page. */

router.get('/', function(req, res, next) {
    res.send('This is the API home page!');
  });
  
  module.exports = router;
  