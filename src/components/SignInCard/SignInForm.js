import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";

import { selectUsers } from "../../redux/selectors/usersSelectors";
import { signInAction } from "../../redux/actions/authActions";

const SignInForm = () => {
  const users = useSelector(selectUsers);
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSelectChange = (event) => {
    setUser(event.target.value);
  };

  const handleSignIn = () => {
    if (!user) return;

    const from = location.state?.from?.pathname || "/home";

    dispatch(signInAction(users[user]));
    navigate(from, { replace: true });
  };

  return (
    <Box component="form" noValidate autoComplete="off">
      <FormControl fullWidth>
        <InputLabel id="selectUser">Select a User</InputLabel>
        <Select
          labelId="selectUser"
          label="select a user"
          value={user || ""}
          onChange={handleSelectChange}
          sx={{
            "& > .MuiSelect-select": { display: "flex", alignItems: "center" },
          }}
        >
          {Object.values(users).map((user) => (
            <MenuItem key={user.id} value={user.id} sx={{ py: 1 }}>
              <Avatar src={user.avatarURL} alt={user.name} sx={{ mr: 2, width: 35, height: 35 }} />
              <Typography>{user.name}</Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        onClick={handleSignIn}
        disabled={!Boolean(user)}
        sx={{ mt: 2 }}
      >
        Enter Game
      </Button>
    </Box>
  );
};

export default SignInForm;
