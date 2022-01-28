const {Sequelize, DataTypes, Model} = require('sequelize');
 const {sequelize} = require('../lib/db');

class Question extends Model {

}

Question.init({
    // Model attributes are defined here
    questionText: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    category: {
        type: DataTypes.STRING,
        // allowNull: false
    }
    
}, {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Question', // We need to choose the model name
});

class Answer extends Model {

}

Answer.init({
    answerText: {
        type: DataTypes.String,
    }
},{
    sequelize,
    modelName: 'Answer',
});

Question.hasMany(Answer, {foreignKey: 'questionId'});
Answer.belongsTo(Question, {foreignKey: 'questionId'})

sequelize.sync({alter: true});

// NOTE: Code below will drop and recreate the DB again. Please use only in localhost. I have added a condition that checks for localhost before it runs
// if(process.env.BASE_URL.match('localhost')){
//     sequelize.sync({force: true});
// }

module.exports = {
    Question, Answer
};