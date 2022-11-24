import { createSelector } from "reselect";

export const selectQuestions = (state) => state.questions.entities;

export const selectAnsweredQuestions = createSelector(
  (state) => state.questions.entities,
  (_, authUserId) => authUserId,
  (questions, authUserId) => {
    const checkIfUserAnsweredQuestion = (question, userId) => {
      return question.optionOne.votes.includes(userId) || question.optionTwo.votes.includes(userId);
    };

    return Object.values(questions)
      .filter((question) => checkIfUserAnsweredQuestion(question, authUserId))
      .sort((a, b) => b.timestamp - a.timestamp);
  }
);

export const selectUnansweredQuestions = createSelector(
  (state) => state.questions.entities,
  (_, authUserId) => authUserId,
  (questions, authUserId) => {
    const checkIfUserAnsweredQuestion = (question, userId) => {
      return !question.optionOne.votes.includes(userId) && !question.optionTwo.votes.includes(userId);
    };

    return Object.values(questions)
      .filter((question) => checkIfUserAnsweredQuestion(question, authUserId))
      .sort((a, b) => b.timestamp - a.timestamp);
  }
);
