import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { selectAuthUser } from "../../redux/selectors/authSelectors";
import { signOutAction } from "../../redux/actions/authActions";

const Header = () => {
  const authUser = useSelector(selectAuthUser);
  const dispatch = useDispatch();
  const location = useLocation();
  const pathname = location.pathname;

  const handleSignOut = () => {
    dispatch(signOutAction());
  };

  return (
    <AppBar position="sticky" elevation={1} color="inherit" sx={{ borderBottom: 2, borderColor: "primary.main" }}>
      <Toolbar sx={{ mx: "auto", width: "100%", maxWidth: 1000 }}>
        <List component="nav" aria-label="main navigation" sx={{ display: "flex", p: 0, color: "primary.main" }}>
          <ListItemButton component={RouterLink} to="/home" selected={pathname === "/home"}>
            <ListItemText primary="Home" primaryTypographyProps={{ variant: "subtitle1", noWrap: true }} />
          </ListItemButton>
          <ListItemButton component={RouterLink} to="/add" selected={pathname === "/add"}>
            <ListItemText primary="New Question" primaryTypographyProps={{ variant: "subtitle1", noWrap: true }} />
          </ListItemButton>
          <ListItemButton component={RouterLink} to="/leaderboard" selected={pathname === "/leaderboard"}>
            <ListItemText primary="LeaderBoard" primaryTypographyProps={{ variant: "subtitle1", noWrap: true }} />
          </ListItemButton>
        </List>

        {authUser && (
          <>
            <Stack direction="row" spacing={2} alignItems="center" ml="auto" mr={4}>
              <Avatar
                alt={authUser.name}
                src={authUser.avatarURL}
                sx={{ width: 45, height: 45, border: 1, borderColor: "border.main" }}
              />
              <Typography variant="body1" color="common.black" noWrap={true}>
                Hello, {authUser.name}
              </Typography>
            </Stack>
            <Button
              variant="contained"
              color="secondary"
              size="small"
              disableElevation
              endIcon={<LogoutIcon />}
              onClick={handleSignOut}
              sx={{ border: 1, borderColor: "border.main" }}
            >
              Sign out
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
