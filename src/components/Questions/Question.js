import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import { selectAuthUser } from "../../redux/selectors/authSelectors";
import { selectIsLoadingUsers } from "../../redux/selectors/usersSelectors";
import { saveQuestionAnswerThunkWrapper } from "../../redux/actions/thunkFunctions";

const Question = ({ question }) => {
  const { id: questionId, optionOne, optionTwo } = question;
  const authUser = useSelector(selectAuthUser);
  const isLoading = useSelector(selectIsLoadingUsers);
  const [optionValue, setOptionValue] = useState("optionOne");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setOptionValue(event.target.value);
  };

  const handleSubmitAnswer = async () => {
    await dispatch(saveQuestionAnswerThunkWrapper(authUser.id, questionId, optionValue));
  };

  return (
    <Stack spacing={1} sx={{ px: 2, py: 1 }}>
      <Typography variant="h6">Would You Rather...?</Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend">Your Answer</FormLabel>
        <RadioGroup
          aria-label="your answer"
          name={`question-${questionId}-answer`}
          value={optionValue}
          onChange={handleChange}
        >
          <FormControlLabel value="optionOne" control={<Radio />} label={optionOne.text} />
          <FormControlLabel value="optionTwo" control={<Radio />} label={optionTwo.text} />
        </RadioGroup>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        fullWidth
        disableElevation
        startIcon={isLoading && <CircularProgress color="inherit" size={20} />}
        onClick={handleSubmitAnswer}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default Question;
