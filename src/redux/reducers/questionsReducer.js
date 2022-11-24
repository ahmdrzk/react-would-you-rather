import {
  QUESTIONS_RECEIVEDQUESTIONS,
  QUESTIONS_SAVEQUESTION,
  QUESTIONS_SAVEQUESTIONANSWER,
  QUESTIONS_STARTLOADING,
  QUESTIONS_STOPLOADING,
} from "../actions/questionsActions";

/* Initial State */
const initialState = { isLoading: false, entities: {} };

/* Reducer */
const questionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case QUESTIONS_STARTLOADING:
      return { ...state, isLoading: true };

    case QUESTIONS_STOPLOADING:
      return { ...state, isLoading: false };

    case QUESTIONS_RECEIVEDQUESTIONS:
      return { isLoading: false, entities: action.payload.questions };

    case QUESTIONS_SAVEQUESTION:
      const { savedQuestion } = action.payload;
      return {
        isLoading: false,
        entities: { ...state.entities, [savedQuestion.id]: savedQuestion },
      };

    case QUESTIONS_SAVEQUESTIONANSWER:
      const { authorId, questionId, answer } = action.payload;
      return {
        isLoading: false,
        entities: {
          ...state.entities,
          [questionId]: {
            ...state.entities[questionId],
            [answer]: {
              ...state.entities[questionId][answer],
              votes: [...state.entities[questionId][answer].votes, authorId],
            },
          },
        },
      };

    default:
      return state;
  }
};

export default questionsReducer;
