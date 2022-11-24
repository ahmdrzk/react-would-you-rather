import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from "../../data/_DATA";
import {
  receivedQuestionsAction,
  saveQuestionAction,
  saveQuestionAnswerAction,
  startLoadingAction as questionsStartLoadingAction,
  stopLoadingAction as questionsStopLoadingAction,
} from "./questionsActions";
import {
  receivedUsersAction,
  saveUserAnswer,
  saveUserQuestion,
  startLoadingAction as usersStartLoadingAction,
  stopLoadingAction as usersStopLoadingAction,
} from "./usersActions";

/* Thunk Functions */

/* #1 */
export const fetchInitialDataThunk = async (dispatch, getState) => {
  dispatch(usersStartLoadingAction());
  dispatch(questionsStartLoadingAction());

  try {
    const results = await Promise.all([_getUsers(), _getQuestions()]);
    dispatch(receivedUsersAction(results[0]));
    dispatch(receivedQuestionsAction(results[1]));
  } catch (error) {
    dispatch(usersStopLoadingAction());
    dispatch(questionsStopLoadingAction());
  }
};

/* #2 */
export const saveQuestionThunkWrapper = (optionOneText, optionTwoText, authorId) => async (dispatch, getState) => {
  dispatch(usersStartLoadingAction());
  dispatch(questionsStartLoadingAction());

  try {
    const savedQuestion = await _saveQuestion({ optionOneText, optionTwoText, author: authorId });
    dispatch(saveQuestionAction(savedQuestion));
    dispatch(saveUserQuestion(authorId, savedQuestion.id));
  } catch (error) {
    dispatch(usersStopLoadingAction());
    dispatch(questionsStopLoadingAction());
  }
};

/* #3 */
export const saveQuestionAnswerThunkWrapper = (authUserId, questionId, answer) => async (dispatch, getState) => {
  dispatch(usersStartLoadingAction());
  dispatch(questionsStartLoadingAction());

  try {
    await _saveQuestionAnswer({ authedUser: authUserId, qid: questionId, answer });
    dispatch(saveQuestionAnswerAction(authUserId, questionId, answer));
    dispatch(saveUserAnswer(authUserId, questionId, answer));
  } catch (error) {
    dispatch(usersStopLoadingAction());
    dispatch(questionsStopLoadingAction());
  }
};
