import { Stack } from "@mui/material";
import { useSelector } from "react-redux";

import UserScoreCard from "../components/LeaderBoard/UserScoreCard";
import { selectUsersSortedByScore } from "../redux/selectors/usersSelectors";

const LeaderBoardPage = () => {
  const usersSortedByScore = useSelector(selectUsersSortedByScore);

  return (
    <Stack spacing={2} component="ul">
      {usersSortedByScore.map((user, index) => (
        <UserScoreCard key={user.id} user={user} index={index + 1} />
      ))}
    </Stack>
  );
};

export default LeaderBoardPage;
