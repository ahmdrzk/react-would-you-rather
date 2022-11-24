import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";

import { selectAuthUser } from "../redux/selectors/authSelectors";
import SignInCard from "../components/SignInCard/SignInCard";

const SignInPage = () => {
  const authUser = useSelector(selectAuthUser);

  if (authUser) return <Navigate to="/home" />;

  return (
    <Stack sx={{ minHeight: 450 }}>
      <SignInCard />
      <Link
        href="https://www.freepik.com/vectors/people"
        target="_blank"
        rel="noreferrer"
        variant="caption"
        underline="hover"
        sx={{
          mt: "auto",
          color: "info.main",
          fontWeight: "fontWeightLight",
          textAlign: "center",
        }}
      >
        People vector created by pikisuperstar - www.freepik.com
      </Link>
    </Stack>
  );
};

export default SignInPage;
