/* Action Types */
export const USERS_STARTLOADING = "users/startLoading";
export const USERS_STOPLOADING = "users/stopLoading";

export const USERS_RECEIVEDUSERS = "users/receivedUsers";
export const USERS_SAVEUSERQUESTION = "users/saveUserQuestion";
export const USERS_SAVEUSERANSWER = "users/saveUserAnswer";

/* Action Creators */
export const startLoadingAction = () => ({ type: USERS_STARTLOADING });
export const stopLoadingAction = () => ({ type: USERS_STOPLOADING });

export const receivedUsersAction = (users) => ({ type: USERS_RECEIVEDUSERS, payload: { users } });
export const saveUserQuestion = (authorId, questionId) => ({
  type: USERS_SAVEUSERQUESTION,
  payload: { authorId, questionId },
});
export const saveUserAnswer = (authorId, questionId, answer) => ({
  type: USERS_SAVEUSERANSWER,
  payload: { authorId, questionId, answer },
});
