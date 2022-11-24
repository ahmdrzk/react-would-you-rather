import { useSelector } from "react-redux";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { selectAuthUser } from "../../redux/selectors/authSelectors";
import OptionResult from "./OptionResult";

const QuestionResult = ({ question }) => {
  const {
    optionOne: { votes: optionOneVotes, text: optionOneText },
    optionTwo: { votes: optionTwoVotes, text: optionTwoText },
  } = question;
  const authUser = useSelector(selectAuthUser);

  const optionOneVotesCount = optionOneVotes.length;
  const optionTwoVotesCount = optionTwoVotes.length;
  const totalVotesCount = optionOneVotesCount + optionTwoVotesCount;

  const optionOneVotesPercentage = `${((optionOneVotesCount / totalVotesCount) * 100).toFixed()}%`;
  const optionTwoVotesPercentage = `${((optionTwoVotesCount / totalVotesCount) * 100).toFixed()}%`;

  const isOptionOneWon = optionOneVotesCount > optionTwoVotesCount;
  const isOptionTwoWon = optionTwoVotesCount > optionOneVotesCount;

  const isOptionOneMyAnswer = optionOneVotes.includes(authUser.id);
  const isOptionTwoMyAnswer = optionTwoVotes.includes(authUser.id);

  return (
    <Stack spacing={2} sx={{ px: 2, py: 1 }}>
      <Typography variant="h6" sx={{ mb: -1 }}>
        Results:
      </Typography>
      <OptionResult
        isOptionWon={isOptionOneWon}
        optionText={optionOneText}
        optionVotesCount={optionOneVotesCount}
        totalVotesCount={totalVotesCount}
        optionVotesPercentage={optionOneVotesPercentage}
        isMyAnswer={isOptionOneMyAnswer}
      />
      <OptionResult
        isOptionWon={isOptionTwoWon}
        optionText={optionTwoText}
        optionVotesCount={optionTwoVotesCount}
        totalVotesCount={totalVotesCount}
        optionVotesPercentage={optionTwoVotesPercentage}
        isMyAnswer={isOptionTwoMyAnswer}
      />
    </Stack>
  );
};

export default QuestionResult;
