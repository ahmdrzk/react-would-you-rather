import {
  USERS_RECEIVEDUSERS,
  USERS_SAVEUSERANSWER,
  USERS_SAVEUSERQUESTION,
  USERS_STARTLOADING,
  USERS_STOPLOADING,
} from "../actions/usersActions";

/* Initial State */
const initialState = { isLoading: false, entities: {} };

/* Reducer */
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_STARTLOADING:
      return { ...state, isLoading: true };

    case USERS_STOPLOADING:
      return { ...state, isLoading: false };

    case USERS_RECEIVEDUSERS:
      return { isLoading: false, entities: action.payload.users };

    case USERS_SAVEUSERQUESTION:
      return {
        isLoading: false,
        entities: {
          ...state.entities,
          [action.payload.authorId]: {
            ...state.entities[action.payload.authorId],
            questions: [...state.entities[action.payload.authorId].questions, action.payload.questionId],
          },
        },
      };

    case USERS_SAVEUSERANSWER:
      return {
        isLoading: false,
        entities: {
          ...state.entities,
          [action.payload.authorId]: {
            ...state.entities[action.payload.authorId],
            answers: {
              ...state.entities[action.payload.authorId].answers,
              [action.payload.questionId]: action.payload.answer,
            },
          },
        },
      };

    default:
      return state;
  }
};

export default usersReducer;
