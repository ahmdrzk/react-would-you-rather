import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectAuthUser } from "../redux/selectors/authSelectors";
import { selectQuestions } from "../redux/selectors/questionsSelectors";
import NotFoundPage from "./NotFoundPage";
import UserCardLayout from "../components/Shared/UserCardLayout";
import QuestionResult from "../components/Questions/QuestionResult";
import Question from "../components/Questions/Question";

const QuestionPage = () => {
  const authUser = useSelector(selectAuthUser);
  const questions = useSelector(selectQuestions);
  const { questionId } = useParams();

  const question = questions[questionId];

  if (!question) return <NotFoundPage />;

  const { author, optionOne, optionTwo } = question;

  const isAnsweredQuestion = optionOne.votes.includes(authUser.id) || optionTwo.votes.includes(authUser.id);

  const renderedComponent = isAnsweredQuestion ? (
    <QuestionResult question={question} />
  ) : (
    <Question question={question} />
  );

  return <UserCardLayout authorId={author}>{renderedComponent}</UserCardLayout>;
};

export default QuestionPage;
