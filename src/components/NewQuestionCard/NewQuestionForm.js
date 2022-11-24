import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { selectAuthUser } from "../../redux/selectors/authSelectors";
import { selectIsLoadingUsers } from "../../redux/selectors/usersSelectors";
import { saveQuestionThunkWrapper } from "../../redux/actions/thunkFunctions";

const NewQuestionForm = () => {
  const authUser = useSelector(selectAuthUser);
  const isLoading = useSelector(selectIsLoadingUsers);

  const optionOneRef = useRef("");
  const optionTwoRef = useRef("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitQuestion = async () => {
    const optionOneText = optionOneRef.current.value;
    const optionTwoText = optionTwoRef.current.value;

    if (!optionOneText || !optionTwoText) {
      window.alert("Please fill in the two options!");
      return;
    }

    await dispatch(saveQuestionThunkWrapper(optionOneText, optionTwoText, authUser.id));
    navigate("/home");
  };

  return (
    <Stack spacing={2} component="form" noValidate autoComplete="off">
      <Typography variant="body1" sx={{ fontWeight: "fontWeightMedium" }}>
        Would You Rather ...
      </Typography>
      <TextField variant="outlined" id="optionOne" label="Option One" size="small" fullWidth inputRef={optionOneRef} />
      <Divider>OR</Divider>
      <TextField variant="outlined" id="optionTwo" label="Option Two" size="small" fullWidth inputRef={optionTwoRef} />
      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        disableElevation
        startIcon={isLoading && <CircularProgress color="inherit" size={20} />}
        onClick={handleSubmitQuestion}
      >
        Submit
      </Button>
    </Stack>
  );
};

export default NewQuestionForm;
