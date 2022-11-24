/* Action Types */
export const QUESTIONS_STARTLOADING = "questions/startLoading";
export const QUESTIONS_STOPLOADING = "questions/stopLoading";

export const QUESTIONS_RECEIVEDQUESTIONS = "questions/receivedQuestions";
export const QUESTIONS_SAVEQUESTION = "questions/saveQuestion";
export const QUESTIONS_SAVEQUESTIONANSWER = "questions/saveQuestionAnswer";

/* Action Creators */
export const startLoadingAction = () => ({ type: QUESTIONS_STARTLOADING });
export const stopLoadingAction = () => ({ type: QUESTIONS_STOPLOADING });

export const receivedQuestionsAction = (questions) => ({ type: QUESTIONS_RECEIVEDQUESTIONS, payload: { questions } });
export const saveQuestionAction = (savedQuestion) => ({ type: QUESTIONS_SAVEQUESTION, payload: { savedQuestion } });
export const saveQuestionAnswerAction = (authorId, questionId, answer) => ({
  type: QUESTIONS_SAVEQUESTIONANSWER,
  payload: { authorId, questionId, answer },
});
